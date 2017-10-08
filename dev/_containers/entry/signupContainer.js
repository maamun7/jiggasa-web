import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SignupForm from '../../_components/form/signupForm';
import * as userAction from '../../_actions/userActions'

class signupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);

        console.log("Container response_props:", this.props);
    }

    handleSubmitSignup(inputs) {
        // console.log('On Submit--: ', inputs);
        this.props.executeSignup(inputs);
    }

    render() {
        return (
            <div>
                <h1> User registration </h1>
                <SignupForm submitSignup={this.handleSubmitSignup}> </SignupForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(signupContainer);