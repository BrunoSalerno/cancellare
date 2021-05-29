import { Component, h } from 'preact';

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
      <div>
        <textarea className="input-text" value={state.text} onChange={this.handleChange.bind(this)}/>
        <Link href={`/text?text=${encodeURIComponent(state.text)}`}>Caricare</Link>
      </div>
    );
  }
}

export default TextLoader
