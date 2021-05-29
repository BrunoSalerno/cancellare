import { Component, h } from 'preact';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { buildQueryString } from './helpers';


class TextLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text, deleted: this.props.deleted || '' }
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  getTextURL() {
    return `/text?${buildQueryString(this.state.text, this.state.deleted)}`;
  }

  render(props, state) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <textarea className="input-text" value={state.text} onChange={this.handleChange.bind(this)}/>
        </Grid>
        <Grid item xs={12}>
          <Link href={this.getTextURL()}>Caricare</Link>
        </Grid>
      </Grid>
    );
  }
}

export default TextLoader
