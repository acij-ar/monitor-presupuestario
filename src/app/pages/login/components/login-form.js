const React = require('react');
const axios = require('axios');

class TextsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginSuccessful: false,
      loginError: false,
      waitingResponse: false,
    };
    this.attemptLogin = this.attemptLogin.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async onKeyDown(e) {
    if(e.key === 'Enter') {
      await this.attemptLogin();
    }
  }

  async attemptLogin() {
    const {password} = this.state;
    this.setState({ waitingResponse: true, loginSuccessful: false, loginError: false });
    let loginSuccessful = false;
    try {
      await axios.post('/api/admin/login', {password});
      loginSuccessful = true;
    } catch (error) {
      console.error(error);
    }
    if (loginSuccessful) {
      this.setState({ loginSuccessful: true, waitingResponse: false });
      window.location.href = '/admin';
    } else {
      this.setState({ loginError: true, waitingResponse: false });
    }
  }

  render() {
    const {password, waitingResponse, loginSuccessful, loginError} = this.state;
    return (
      <div className="monitor-content monitor-login">
        <div className="monitor-login-page-section">
          <h2>Ingresar</h2>
                    Contraseña
          <input
            type="password"
            value={password}
            onChange={this.onPasswordChange}
            onKeyDown={this.onKeyDown}
            autoFocus
          />
          <button onClick={this.attemptLogin} disabled={waitingResponse}>Ingresar</button>
          <span className="monitor-login-feedback">
            {loginSuccessful && '✅'}
            {loginError && '❌'}
          </span>
        </div>
      </div>
    );
  }
}

module.exports = TextsForm;
