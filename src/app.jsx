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
  getPartsFromString(arr, character) {
    const newArr = [];
    arr.map(element => {
      const newParts = element.props.content.split(character);
      const newPartsLength = newParts.length
      newParts.map((part, i) => {
        newArr.push(<Part content={part}/>);
        if (i + 1 < newPartsLength) {
          newArr.push(<Part content={character}/>)
        }
      });
    });
    return newArr;
  }

  getTextParts(text) {
    let parts = this.getPartsFromString([<Part content={text}/>], "\n");
    parts = this.getPartsFromString(parts, " ");
    parts = this.getPartsFromString(parts, ",");
    console.log(parts)
    return parts
  }

  render(props, state) {
    return (
      <div>{this.getTextParts(this.props.text)}</div>
    )
  }
}


class App extends Component {
  render(props, state) {
    return (
      <Container maxWidth="sm">
          <Router>
            <Text path="/" text="Esto es un texto.\nY solamente eso, un texto"/>
          </Router>
      </Container>
    );
  }
}


export default App
