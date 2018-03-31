import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TestModal from '../../_components/testModal';

class ModalPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

        console.log("Parent, showmodal  in cons :", this.state.showModal);
    }

    handleSubmitSignup(inputs) {
        // console.log('On Submit--: ', inputs);
        this.props.executeSignup(inputs);
    }

    handleClick(event) {
        this.setState({
            showModal: true
        });

        console.log("Parent, showmodal  in handleClick :", this.state.showModal);
    }

    getComponent() {
        if (this.state.showModal) {
            return <TestModal/>;
        } else {
            return null;
        }
    }

    close(){
        this.setState({ showModal: false });
    }

    open(){
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <h1> Hello Modal </h1>


                <a onClick={this.open} > HIIIII </a>
                <TestModal isOpen={this.state.showModal} onHide={this.close}> </TestModal>


            </div>
        );
    }
}

export default ModalPage;