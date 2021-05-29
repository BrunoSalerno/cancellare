import { Component, h } from 'preact';
import { Router, route } from 'preact-router';

import Container from '@material-ui/core/Container';

import Text from './text';


class App extends Component {
  render(props, state) {
    return (
      <Container maxWidth="sm">
          <Router>
            <Text path="/" text="Esto es un texto.\nY solamente eso, un texto."/>
          </Router>
      </Container>
    );
  }
}


export default App
