const React = require('react');
const axios = require('axios');

class TextsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: false,
            waitingResponse: false,
        };
        this.attemptLogin = this.attemptLogin.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onPasswordChange(event) {
        this.state.password = event.target.value;
        this.setState(this.state);
    }

    attemptLogin() {
        const {password} = this.state;
        this.state.waitingResponse = true;
        this.state.loginError = false;
        this.setState(this.state);
        axios.post('/api/admin/login', {password})
            .then(() => {
                window.location.href = '/admin';
            })
            .catch(() => {
                this.state.loginError = true;
                this.state.waitingResponse = false;
                this.setState(this.state);
            })
    }

    render() {
        const {password, waitingResponse} = this.state;
        return (
            <div className="monitor-content monitor-admin">
                <div className="monitor-admin-page-section">
                    <h2>Ingresar</h2>
                    Contraseña <input type="password" value={password} onChange={this.onPasswordChange}/>
                    <button onClick={this.attemptLogin} disabled={waitingResponse}>Ingresar</button>
                </div>
            </div>
        )
    }
}

module.exports = TextsForm;
