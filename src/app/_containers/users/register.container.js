import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SignupForm from '../../_components/Form/signupForm';
import * as userAction from '../../../_actions/user.actions'

class signupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
    }

    handleSubmitSignup(inputs) {
        // console.log('On Submit--: ', inputs);
        this.props.executeSignup(inputs);
    }

    render() {

        let msg = "";
        let handleError = "";

        if (this.props.signUp != null) {
            msg = this.props.signUp.res.msg;
        }

        if (this.props.signUp != null) {
           let responseObj = this.props.signUp.res.error;
            handleError = Object.keys(responseObj).map((key) => { return( <li> {responseObj[key]} </li> ) });
        }


        return (
            <div>
                <h1> User registration </h1>
                <h1> {msg} </h1>
                <ul> {handleError} </ul>
                <SignupForm submitSignup={this.handleSubmitSignup}> </SignupForm>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        signUp: state.signUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        executeSignup: submitedData => dispatch(userAction.signUp(submitedData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(signupContainer);