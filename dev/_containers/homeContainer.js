import React from 'react';
import { Link } from 'react-router';
import HomeModal from '../_components/home/homeModal';
import { connect } from 'react-redux';
import * as userAction from '../_actions/entryActions'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmitSignup(inputs) {

        console.log("Console LOG :", inputs);
        this.props.executeSignup(inputs);
    }

    handleClick(event) {
        this.setState({
            showModal: true
        });
    }

    render() {
        return (<HomeModal isOpen={true} submitSignup={this.handleSubmitSignup} serverResponse={this.props.signUp}> </HomeModal>);
    }
}


const mapStateToProps = (state) => {
    return {
        signUp: state.signUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        executeSignup: submitedData => dispatch(userAction.createSignupUser(submitedData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);