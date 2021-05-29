import { Component, h } from 'preact';
import { Router, route } from 'preact-router';

import Container from '@material-ui/core/Container';

import Text from './text';
import TextLoader from './text_loader';


class App extends Component {
  render(props, state) {
    return (
      <Container maxWidth="sm">
          <Router>
            <TextLoader path="/" />
            <Text path="/text" />
          </Router>
      </Container>
    );
  }
}


export default App
