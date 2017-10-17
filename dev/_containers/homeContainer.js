import React from 'react';
import { Link } from 'react-router';
import HomeModal from '../_components/home/homeModal';
import { connect } from 'react-redux';
import * as userAction from '../_actions/entryActions';
import { verifyAuthToken, getAuthInfo } from '../_helpers/helper';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: true
        };

        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmitSignin = this.handleSubmitSignin.bind(this);


        if (verifyAuthToken()) {
            this.state = {
                showModal: false
            };
        }
    }

    handleSubmitSignup(inputs) {
        this.props.executeSignup(inputs);
    }

    handleSubmitSignin(inputs) {
        this.props.executeSignin(inputs);
    }

    handleClick(event) {
        this.setState({
            showModal: true
        });
    }

    render() {

        console.log("Show modal status :", this.state.showModal);
        return (<HomeModal
            isOpen={this.state.showModal}
            submitSignup={this.handleSubmitSignup}
            serverResponse={this.props.signUp}
            submitSignin={this.handleSubmitSignin}
            serverRespSignin={this.props.signIn}>
        </HomeModal>);
    }
}


const mapStateToProps = (state) => {
    console.log("Signin response :", state.signIn);
    return {
        signUp: state.signUp,
        signIn: state.signIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        executeSignup: submitedData => dispatch(userAction.createSignupUser(submitedData)),
        executeSignin: submitedObj => dispatch(userAction.makeSigninUser(submitedObj))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);