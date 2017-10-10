import React from 'react';
import { Link } from 'react-router';
import HomeModal from '../_components/home/homeModal';

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
        // console.log('On Submit--: ', inputs);
        this.props.executeSignup(inputs);
    }

    handleClick(event) {
        this.setState({
            showModal: true
        });
    }

    render() {
        return (<HomeModal isOpen={true}> </HomeModal>);
    }
}

export default HomeContainer;