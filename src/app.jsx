import { Component, h } from 'preact';
import { Router, route } from 'preact-router';


import Container from '@material-ui/core/Container';

class Part extends Component {
  handleClick() {
    this.props.onClick(this.props.index);
  }

  getStyle() {
    if (this.props.deleted) {
      return {backgroundColor: "black"};
    }
    return {}
  }

  render(props, state) {
    if (props.content == "\n") {
      return <br />;
    }
    return <span style={this.getStyle()} onClick={this.handleClick.bind(this)}>
      {props.content}
    </span>;
  }
}


class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {parts: this.getTextParts(props.text), deleted: new Set()}
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

  handleClick(index) {
    const deleted = this.state.deleted;
    if (deleted.has(index)) {
      deleted.delete(index);
    } else {
      deleted.add(index);
    }
    this.setState({deleted: deleted});
  }

  render(props, state) {
    return (
      <div>
        {this.state.parts.map((part, i) =>
          <Part content={part} index={i} deleted={state.deleted.has(i)} onClick={this.handleClick.bind(this)}/>
        )}
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
