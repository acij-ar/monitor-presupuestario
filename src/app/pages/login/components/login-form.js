const React = require('react');
const axios = require('axios');

class TextsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: false,
            waitingResponse: true,
        };
        this.attemptLogin = this.attemptLogin.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onUsernameChange(username) {
        this.state.username = username;
        this.setState(this.state);
    }

    onPasswordChange(password) {
        this.state.password = password;
        this.setState(this.state);
    }

    attemptLogin() {
        const {username, password} = this.state;
        this.state.waitingResponse = true;
        this.state.loginError = false;
        this.setState(this.state);
        axios.post('/api/admin/login', {username, password})
            .then(() => {
                window.location = '';
            })
            .catch(() => {
                this.state.loginError = true;
                this.state.waitingResponse = false;
                this.setState(this.state);
            })
    }

    render() {
        const {username, password, waitingResponse} = this.state;
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Ingresar</h2>
                    Usuario <input type="text" value={username} onChange={this.onUsernameChange}/>
                    Contraseña <input type="password" value={password} onChange={this.onPasswordChange}/>
                    <button onClick={this.saveTexts} disabled={waitingResponse}>Ingresar</button>
                </div>
            </div>
        )
    }
}

module.exports = TextsForm;
