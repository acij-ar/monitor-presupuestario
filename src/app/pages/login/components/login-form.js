const React = require('react');
const axios = require('axios');

class TextsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginSuccessfull: false,
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

  onKeyDown(e) {
    if(e.key === 'Enter') {
      this.attemptLogin();
    }
  }

  attemptLogin() {
    const {password} = this.state;
    this.setState({
      waitingResponse: true,
      loginSuccessfull: false,
      loginError: false,
    });
    axios.post('/api/admin/login', {password})
      .then(() => {
        this.setState({
          loginSuccessfull: true,
          waitingResponse: false,
          loginError: false,
        });
        window.location.href = '/admin';
      })
      .catch(() => {
        this.setState({
          loginSuccessfull: false,
          loginError: true,
          waitingResponse: false,
        });
      });
  }

  render() {
    const {password, waitingResponse, loginSuccessfull, loginError} = this.state;
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
            {loginSuccessfull && '✅'}
            {loginError && '❌'}
          </span>
        </div>
      </div>
    );
  }
}

module.exports = TextsForm;
