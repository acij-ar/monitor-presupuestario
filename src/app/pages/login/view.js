const React = require('react');
const Page = require('../../components/page');
const LoginForm = require('./components/login-form');

const App = () => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Admin</h1>
            </div>
        </div>
        <LoginForm/>
    </Page>
);

module.exports = App;
