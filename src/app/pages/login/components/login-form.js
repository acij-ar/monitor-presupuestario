const React = require('react');
const axios = require('axios');
require('./login-form.scss');

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
        this.state.password = event.target.value;
        this.setState(this.state);
    }

    onKeyDown(e) {
        if(e.key === 'Enter') {
            this.attemptLogin();
        }
    }

    attemptLogin() {
        const {password} = this.state;
        this.state.waitingResponse = true;
        this.state.loginError = false;
        this.setState(this.state);
        axios.post('/api/admin/login', {password})
            .then(() => {
                this.state.loginSuccessfull = true;
                this.setState(this.state);
                window.location.href = '/admin';
            })
            .catch(() => {
                this.state.loginError = true;
                this.state.waitingResponse = false;
                this.setState(this.state);
            })
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
        )
    }
}

module.exports = TextsForm;
