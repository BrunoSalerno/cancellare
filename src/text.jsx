import { Component, h } from 'preact';
import { route } from 'preact-router';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


class Part extends Component {
  handleClick() {
    this.props.onClick(this.props.index);
  }

  getExtraClasses() {
    if (this.props.deleted) {
      return "deleted";
    }
    return "";
  }

  render(props, state) {
    if (props.content == "\n") {
      return <br />;
    }
    return <span className={`part ${this.getExtraClasses()}`} onClick={this.handleClick.bind(this)}>
      {props.content}
    </span>;
  }
}


class Text extends Component {
  constructor(props) {
    super(props);
    this.CHARACTERS = ["\n", " ", ",", ";", ".", "“", "”", "\""];
    const deleted = props.deleted ? props.deleted.split(",").map(d => parseInt(d)) : null;
    this.state = {
      parts: this.getTextParts(props.text),
      deleted: new Set(deleted)
    };
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
    this.CHARACTERS.map(character => {
      parts = this.getPartsFromString(parts, character);
    });
    return parts
  }

  updateQueryString() {
    const text = encodeURIComponent(this.props.text);
    const deleted = Array.from(this.state.deleted).sort().join(",");
    route(`/text?text=${text}&deleted=${deleted}`, true);
  }

  handleClick(index) {
    const deleted = this.state.deleted;
    if (deleted.has(index)) {
      deleted.delete(index);
    } else {
      deleted.add(index);
    }
    this.setState({deleted: deleted}, this.updateQueryString);
  }

  render(props, state) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {this.state.parts.map((part, i) =>
            <Part content={part} index={i} deleted={state.deleted.has(i)} onClick={this.handleClick.bind(this)}/>
          )}
        </Grid>
        <Grid item xs={12}>
          <Link href="/">Caricare testo</Link>
        </Grid>
      </Grid>
    )
  }
}

export default Text
