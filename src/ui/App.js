import { h, Component } from 'preact';
import appIcon from '../../assets/icons/app-icon-512.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render(_, { clicks }) {
    return (
      <div class="app">
        <img src={appIcon} width={256} onClick={this._onClick} />
        <br />
        <h1>Clicks: {clicks}</h1>
      </div>
    );
  }
}
