import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TestModal from '../_components/testModal';

class ModalPage extends React.Component {
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
                <h1> Hello Modal </h1>
                <TestModal> hear is modal </TestModal>
            </div>
        );
    }
}

export default ModalPage;