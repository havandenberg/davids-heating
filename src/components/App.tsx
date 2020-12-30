import * as React from 'react';
import styled from 'react-emotion';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import l from '../styles/layout';
import th from '../styles/theme';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Reviews from './Reviews';
import Services from './Services';

const Main = styled('div')({
  background: th.colors.background,
  margin: '0 auto',
  maxWidth: th.widths.maxPage,
});

interface State {
  loading: boolean;
}

class App extends React.Component<{}, State> {
  render() {
    return (
      <Router>
        <Main id="top">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <div>
                  <Header />
                  <l.Space background={th.colors.blue}>
                    <l.Page>
                      <l.Flex alignTop columnOnMobile spaceBetween>
                        <l.Space
                          mb={[th.spacing.l, 0, 0]}
                          width={['100%', '60%', '70%']}
                        >
                          <Services />
                          <Projects />
                          <Reviews />
                        </l.Space>
                        <l.Space width={['100%', '35%', '25%']}>
                          <ContactForm />
                        </l.Space>
                      </l.Flex>
                    </l.Page>
                  </l.Space>
                  <Footer />
                </div>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App;
