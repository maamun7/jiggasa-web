import React from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoginForm from '../form/loginForm';

class signinPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Hello Login </h1>
                <LoginForm> 555 </LoginForm>
            </div>
        );
    }
}

export default signinPage;