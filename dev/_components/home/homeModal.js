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
        backgroundColor   : 'rgba(255, 255, 255, 0.20)'
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
            value: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

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

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const wellStyles = {maxWidth: '100%', margin: '0 auto 10px'};

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
                                    <form>
                                        <form>
                                            <FormGroup controlId="formValidationSuccess1" validationState="success">
                                                <FormControl type="text" placeholder="Name" />
                                                {/*<HelpBlock>Help text with validation state.</HelpBlock>*/}
                                            </FormGroup>

                                            <FormGroup controlId="formValidationSuccess1" validationState="success">
                                               {/* <ControlLabel>Input with error</ControlLabel>*/}
                                                <FormControl type="text" placeholder="Email"  />
                                            </FormGroup>

                                            <FormGroup controlId="formValidationSuccess1" validationState="success">
                                                <FormControl type="text" placeholder="Password" />
                                                {/*<HelpBlock>Help text with validation state.</HelpBlock>*/}
                                            </FormGroup>
                                            <Button bsStyle="success" bsSize="primary" block>Signup</Button>

                                        </form>
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
                                        <Button bsStyle="success" bsSize="primary" block>Signin</Button>
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