import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LoginForm from '../../_components/form/signinForm';
import * as userAction from '../../_actions/user.actions'

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
        executeSignup: submitedData => dispatch(userAction.signUp(submitedData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(signinPage);