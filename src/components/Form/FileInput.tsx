import * as firebase from 'firebase';
import * as R from 'ramda';
import * as React from 'react';
import Dropzone, { DropFilesEventHandler } from 'react-dropzone';
import styled from 'react-emotion';
import { width } from 'styled-system';
import l from '../../styles/layout';
import th from '../../styles/theme';
import t from '../../styles/typography';
import { isMobile } from '../../utils/screensize';

const DropzoneInner = styled('div')(
  {
    ':hover': {
      border: `2px solid ${th.colors.blue}`,
    },
    cursor: 'pointer',
    padding: th.spacing.s,
    transition: th.transitions.default,
  },
  ({ error, isDragActive }: { error?: boolean; isDragActive: boolean }) => ({
    border: error
      ? th.borders.blueThick
      : isDragActive
      ? `2px solid ${th.colors.blue}`
      : `2px dashed ${th.colors.black}`,
  }),
);

const LoadingBar = styled('div')(
  {
    background: th.colors.blue,
    height: 2,
  },
  width,
);

interface Props {
  error: boolean;
  fileUrl: string;
  onChange: (fileUrl: string) => void;
  previewSideLength?: number;
}

interface State {
  file: {
    preview: string;
  };
  uploadProgress: string;
}

class FileInput extends React.Component<Props, State> {
  state = { file: { preview: '' }, uploadProgress: '0%' };

  handleDrop: DropFilesEventHandler = accepted => {
    if (accepted.length === 1) {
      const file: File = accepted[0];
      const { currentUser } = firebase.auth();
      if (currentUser) {
        const storageRef = firebase
          .storage()
          .ref(`members/${currentUser.uid}/${file.name}`);
        const uploadTask = storageRef.put(file);
        uploadTask.on(
          'state_changed',
          (snapshot: firebase.storage.UploadTaskSnapshot) => {
            const uploadProgress = `${(snapshot.bytesTransferred /
              snapshot.totalBytes) *
              100}%`;
            this.setState({ uploadProgress });
          },
          error => {
            console.log(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.setState(
                {
                  file: Object.assign(file, {
                    preview: downloadURL,
                  }),
                  uploadProgress: '0%',
                },
                () => this.props.onChange(downloadURL),
              );
            });
          },
        );
      }
    }
  };

  render() {
    const { error, fileUrl, previewSideLength } = this.props;
    const { file, uploadProgress } = this.state;
    const previewSrc = R.isEmpty(file.preview) ? fileUrl : file.preview;
    return (
      <Dropzone
        accept="image/jpeg, image/png"
        multiple={false}
        onDrop={this.handleDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <DropzoneInner
            {...getRootProps()}
            error={error}
            isDragActive={isDragActive}>
            <l.Flex>
              <input {...getInputProps()} />
              {!R.isEmpty(previewSrc) && (
                <l.FlexCentered p={th.spacing.s}>
                  <l.Img
                    height={previewSideLength || 100}
                    width={previewSideLength || 100}
                    src={previewSrc}
                  />
                </l.FlexCentered>
              )}
              <t.Text center mb={th.spacing.s} width={150}>
                {`${isMobile() ? 'Touch' : 'Click or drag'} here to upload`}
              </t.Text>
            </l.Flex>
            <LoadingBar width={uploadProgress} />
          </DropzoneInner>
        )}
      </Dropzone>
    );
  }
}

export default FileInput;
