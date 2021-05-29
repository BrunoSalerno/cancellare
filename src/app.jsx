import { Component, h } from 'preact';
import { Router, route } from 'preact-router';


import Container from '@material-ui/core/Container';

class Home extends Component {
  render(props, state) {
    return (
      <p>Ciao</p>
    )
  }
}


class App extends Component {
  render(props, state) {
    return (
      <Container maxWidth="sm">
          <Router>
            <Home path="/" />
          </Router>
      </Container>
    );
  }
}


export default App
