import { h, Component } from 'preact';
const { remote, ipcRenderer } = require('electron');
import appIcon from '../../assets/icons/app-icon-512.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this._onClick = this._onClick.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on('menu-event', (_, { name }) => this._onMenuEvent(name));
  }

  _onClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  _onMenuEvent(name) {
    switch (name) {
      case 'open':
        this._onOpenFile();
        break;
      case 'quit':
        remote.app.quit();
        break;
    }
  }

  async _onOpenFile() {
    const window = remote.BrowserWindow.getAllWindows()[0];
    const result = await remote.dialog.showOpenDialog(window);
    if (!result.canceled) {
      console.log(result.filePaths);
    }
  }

  render(_, { clicks }) {
    return (
      <div class="app">
        <img class="moon" src={appIcon} width={256} onClick={this._onClick} />
        <br />
        <h1>Clicks: {clicks}</h1>
      </div>
    );
  }
}
