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
        let validatorObj = {
            field : 'name',
            value : this.state.name,
            rules : {
                required : true,
                email : false,
                min : 3,
                max : 20,
                number : false
            },
            message : {
                required : '',
                email : 'The field must be valid email',
                min : 'The field minimum 3 character',
                max : 'The field maximum 20 character'
            }
        };

        let returnValid = (obj) => {
            let fieldNmae = obj.field.charAt(0).toUpperCase() + obj.field.slice(1);
            let  msgObj = {
                required  : `${ fieldNmae } field is required`,
                email     : `${ obj.field } is not valid email`,
                min       : `${ obj.field } field minimum 3 character`,
                max       : `${ obj.field } field maximum 20 character`,
                number    : `${ obj.field } field must be number`
            };

            let  classObj = {
                success : 'success',
                warning : 'warning',
                error   : 'error'
            };

            const len = (obj.value).length;
            if (len > 10) return { cssClass : classObj.success, msg : ''};
            else if (len > 5) return { cssClass : classObj.warning, msg : msgObj.min};
            else if (len > 0) return { cssClass : classObj.error, msg : msgObj.required};
            else return { cssClass : null, msg : '' };
        };

        return returnValid(validatorObj);
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

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.getNameValidationState()['cssClass'] }>
                                            <FormControl
                                                name="name"
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                placeholder="Name"/>
                                            <HelpBlock> {this.getNameValidationState().msg} </HelpBlock>
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

                                        <Button bsStyle="success" bsSize="sm" block type="submit"> Signup </Button>
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
                                        <Button bsStyle="success" bsSize="sm" block>Signin</Button>
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