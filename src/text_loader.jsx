import { Component, h } from 'preact';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


class TextLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render(props, state) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <textarea className="input-text" value={state.text} onChange={this.handleChange.bind(this)}/>
        </Grid>
        <Grid item xs={12}>
          <Link href={`/text?text=${encodeURIComponent(state.text)}`}>Caricare</Link>
        </Grid>
      </Grid>
    );
  }
}

export default TextLoader
