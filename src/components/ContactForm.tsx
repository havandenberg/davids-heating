import * as emailjs from 'emailjs-com';
import * as R from 'ramda';
import * as React from 'react';
import * as Sticky from 'react-stickynode';
import { isTabletUp } from 'src/utils/screensize';
import l from '../styles/layout';
import th from '../styles/theme';
import ty from '../styles/typography';
import { isValidEmail } from '../utils/validation';
import Form, {
  FormComponentProps,
  FormFieldValidations,
  FormStep,
} from './Form';
import FormActions from './Form/Actions';
import FormRow, { FormRowData } from './Form/Row';

interface ContactFields {
  address: string;
  description: string;
  email: string;
  name: string;
}

const contactFieldValidations: FormFieldValidations<ContactFields> = {
  address: (value: string) => !R.isEmpty(value),
  description: (value: string) => !R.isEmpty(value),
  email: (value: string) => isValidEmail(value),
  name: (value: string) => !R.isEmpty(value),
};

const initialValues = {
  address: '',
  description: '',
  email: '',
  name: '',
};

const contactData: Array<FormRowData<ContactFields>> = [
  {
    isRequired: true,
    items: [
      {
        flex: '100%',
        inputType: 'text',
        valueName: 'name',
      },
    ],
    label: 'Name',
    rowWidth: '100%',
  },
  {
    isRequired: true,
    items: [
      {
        flex: '100%',
        inputType: 'text',
        valueName: 'email',
      },
    ],
    label: 'Email',
    rowWidth: '100%',
  },
  {
    isRequired: true,
    items: [
      {
        flex: '100%',
        inputType: 'text',
        valueName: 'address',
      },
    ],
    label: 'Job address',
    rowWidth: '100%',
  },
  {
    isRequired: true,
    items: [
      {
        flex: '100%',
        inputType: 'textarea',
        valueName: 'description',
      },
    ],
    label: 'Job description',
    rowWidth: '100%',
  },
];

class Step extends React.Component<FormComponentProps<ContactFields>> {
  handleSubmit = (
    onSuccess: () => void,
    onFail: (error: Error) => void,
    resetForm: () => void,
    data: any,
  ) => {
    const { email, name, address, description } = data;
    if (process.env.REACT_APP_EMAILJS_KEY) {
      emailjs
        .send(
          'halsey_vandenberg',
          'davids_heat_estimate_request',
          {
            address,
            description,
            from_name: name,
            reply_to: email,
          },
          process.env.REACT_APP_EMAILJS_KEY,
        )
        .then(onSuccess, onFail);
    } else {
      console.log('Invalid emailjs key');
    }
  };

  render() {
    const { errors, fields, loading, onChange, onSubmit } = this.props;
    return (
      <div>
        {contactData.map(
          (rowItem: FormRowData<ContactFields>, index: number) => (
            <React.Fragment key={`row-${index}`}>
              <FormRow<ContactFields>
                {...rowItem}
                customStyles={{
                  labelWidth: ['200px', '200px', '225px'],
                  rowWidth: rowItem.rowWidth,
                }}
                errors={errors}
                fields={fields}
                fieldValidations={contactFieldValidations}
                isEditing
                onChange={onChange}
              />
              {index + 1 < contactData.length && (
                <l.Space height={th.spacing.m} />
              )}
            </React.Fragment>
          ),
        )}
        <FormActions
          handleForward={(e: React.FormEvent) => {
            e.preventDefault();
            onSubmit(this.handleSubmit);
          }}
          forwardText="Submit"
          loading={loading}
        />
      </div>
    );
  }
}

const formData: Array<FormStep<ContactFields>> = [
  {
    FormComponent: Step,
    label: 'Contact Form',
    rowItems: contactData,
  },
];

class ContactForm extends Form<ContactFields> {}

const ContactFormComponent = () => (
  <Sticky bottomBoundary="#reviews-end" enabled={isTabletUp()} top={40}>
    <l.Space id="estimate" mb={[th.spacing.l, 0, 0]}>
      <ty.H2 mb={th.spacing.l}>Free Estimate</ty.H2>
      <ContactForm
        errorMessage={
          <ty.Text center color={th.colors.red} large mb={th.spacing.xl}>
            An error has occurred. Please try again later.
          </ty.Text>
        }
        id="estimate"
        initialValues={initialValues}
        isEditing
        fieldValidations={contactFieldValidations}
        steps={formData}
        successMessage="Success!"
        validationErrorMessage=""
      />
    </l.Space>
  </Sticky>
);

export default ContactFormComponent;
