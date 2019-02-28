import * as React from 'react';
import styled from 'react-emotion';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import th from '../styles/theme';
import ty from '../styles/typography';

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
              component={() => <ty.Title center>Boilerplate</ty.Title>}
            />
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App;
