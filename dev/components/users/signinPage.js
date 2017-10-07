import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../form/loginForm';
import * as userAction from '../../actions/userActions'

class signinPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
    }

    handleSubmitSignup(inputs) {
       // console.log('On Submit--: ', inputs);
        this.props.executeSignup(inputs);
    }

    render() {
        return (
            <div>
                <h1> Hello Login </h1>
                <LoginForm submitSignup={this.handleSubmitSignup}> </LoginForm>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        signup: state.signUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        executeSignup: submitedData => dispatch(userAction.createSignupUser(submitedData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(signinPage);