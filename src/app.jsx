import { Component, h } from 'preact';
import { Router, route } from 'preact-router';


import Container from '@material-ui/core/Container';

class Part extends Component {
  render(props, state) {
    if (props.content == "\n") {
      return <br />;
    }
    return <span>{props.content}</span>;
  }
}


class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {parts: this.getTextParts(props.text)}
  }

  getPartsFromString(arr, character) {
    const newArr = [];
    arr.map(element => {
      const newParts = element.split(character);
      const newPartsLength = newParts.length;
      newParts.map((part, i) => {
        newArr.push(part);
        if (i + 1 < newPartsLength) {
          newArr.push(character)
        }
      });
    });
    return newArr;
  }

  getTextParts(text) {
    let parts = [text];
    const characters = ["\n", " ", ",", ";", "."];
    characters.map(character => {
      parts = this.getPartsFromString(parts, character);
    });
    return parts
  }

  render(props, state) {
    return (
      <div>
        {this.state.parts.map(part => <Part content={part} />)}
      </div>
    )
  }
}


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
