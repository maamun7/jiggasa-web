import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock }
from 'react-bootstrap';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.00)'
    },

    content : {
        top                        : '50%',
        left                       : '50%',
        right                      : 'auto',
        bottom                     : 'auto',
        border                     : '1px solid #ccc',
        transform                  : 'translate(-50%, -50%)',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        width                      : '45%',
        height                     : '500px'
    }
};

class HomeModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            is_admin: 0
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      //  this.getNameValidationState = this.getNameValidationState.bind(this);


    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
       // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    getNameValidationState() {
        const len = (this.state.name).length;
        if (len > 10) return 'success';
        else if (len > 5) return 'warning';
        else if (len > 0) return 'error';
    }

    handleInputChange(event) {
        const target = event.target;

        if (target.name === 'name') {
            this.setState({
                name: target.value
            });
        }

        if (target.name === 'email') {
            this.setState({
                email: target.value
            });
        }

        if (target.name === 'password') {
            this.setState({
                password: target.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let inputs = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        };

        console.log("Submit signup modal:", inputs);

        this.props.submitSignup(inputs);
    }

    render() {
        let serverResponse = this.props.serverResponse;
        let message = '';
        let classType = '';
        if (null != serverResponse) {
            message = serverResponse.res.msg;
            if (serverResponse.res.success) {
                classType = 'success-msg';
            } else {
                classType = 'error-msg';
            }
        }


        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <center>
                        <img src={ require('../../../public/assets/img/logo.jpg') } height={55}/>
                    </center>
                    <h2 ref={subtitle => this.subtitle = subtitle}> &nbsp; </h2>

                   {/* <button onClick={this.props.onHide}>close</button>*/}

                    <div id="home-modal-container">
                        <div className="row grid-divider">
                            <div className="col-sm-6">
                                <div className="col-padding">

                                    <div className={classType}>
                                        <ControlLabel>{ message }</ControlLabel>
                                    </div>

                                    <form onSubmit={this.handleSubmit}>

                                        <FormGroup controlId="formValidationSuccess1" validationState={this.getNameValidationState()}>
                                            <FormControl
                                                name="name"
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                placeholder="Name"/>
                                            {/*<HelpBlock>Help text with validation state.</HelpBlock>*/}
                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                                           {/* <ControlLabel>Input with error</ControlLabel>*/}
                                            <FormControl
                                                name="email"
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                placeholder="Email" />
                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                                            <FormControl
                                                name="password"
                                                type="text"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                placeholder="Password" />
                                            {/*<HelpBlock>Help text with validation state.</HelpBlock>*/}
                                        </FormGroup>

                                        <Button bsStyle="success" bsSize="lg" block type="submit"> Signup </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-padding">
                                    <form>
                                         <ControlLabel> Signin </ControlLabel>
                                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                                            {/* <ControlLabel>Input with error</ControlLabel>*/}
                                            <FormControl type="text" placeholder="Email"  />
                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState="success">
                                            <FormControl type="text" placeholder="Password" />
                                            {/*<HelpBlock>Help text with validation state.</HelpBlock>*/}
                                        </FormGroup>
                                        <Button bsStyle="success" bsSize="lg" block>Signin</Button>
                                        <Button bsStyle="link">Forgot password</Button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default HomeModal;