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
                password : false,
                min : 3,
                max : 20,
                number : false,
                alphaNum : false
            },
            message : {
                required : null,
                email : 'The field must be valid email',
                min : 'The field minimum 3 character',
                max : 'The field maximum 20 character',
                number : 'The field maximum 20 character',
                alphaNum : 'The field must be alpha numeric',
            }
        };

        return this.validator(validatorObj);
    }

    getEmailValidationState() {
        let validatorObj = {
            field : 'name',
            value : this.state.name,
            rules : {
                required : true,
                email : false,
                password : false,
                min : 3,
                max : 20,
                number : false,
                alphaNum : false
            },
            message : {
                required : null,
                email : 'The field must be valid email',
                min : 'The field minimum 3 character',
                max : 'The field maximum 20 character',
                number : 'The field maximum 20 character',
                alphaNum : 'The field must be alpha numeric',
            }
        };

        return this.validator(validatorObj);
    }

    getPasswordValidationState() {
        let validatorObj = {
            field : 'password',
            value : this.state.password,
            rules : {
                required : true,
                email : false,
                password : true,
                min : 3,
                max : 20,
                number : false,
                alphaNum : true
            },
            message : {
                required : null,
                email : 'The field must be valid email',
                min : 'The field minimum 3 character',
                max : 'The field maximum 20 character',
                number : 'The field maximum 20 character',
                alphaNum : 'The field must be alpha numeric',
            }
        };

        return this.validator(validatorObj);
    }

    validator(obj) {

        let returnValid = (obj) => {

            let fieldNmae = obj.field.charAt(0).toUpperCase() + obj.field.slice(1);
            let  msgObj = {
                required  : `${ fieldNmae } field is required`,
                emailReq  : `${ fieldNmae } field required a valid email`,
                email     : `${ fieldNmae } is not valid email`,
                min       : `${ fieldNmae } field minimum 3 character`,
                max       : `${ fieldNmae } field maximum 20 character`,
                number    : `${ fieldNmae } field must be number`
            };

            let  classObj = {
                success : 'success',
                warning : 'warning',
                error   : 'error'
            };

            if (obj.rules.email) {
                let len = (obj.value).length;
                console.log("Console LOG :", len);
                if (len > 0 && len < 4) {
                    return {
                        cssClass : classObj.error,
                        msg : ( obj.message.required !== null ) ? obj.message.required : msgObj.emailReq
                    }
                } else if (len > 3) {
                    if (isEmail(obj.value)) {
                        return {
                            cssClass : classObj.success,
                            msg : null
                        }
                    } else {
                        return {
                            cssClass : classObj.error,
                            msg : ( obj.message.email !== null ) ? obj.message.email : msgObj.email
                        }
                    }
                } else {
                    return {
                        cssClass : null,
                        msg : null
                    }
                }

                function isEmail (email) {
                    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return reg.test(email);
                    if (reg.test(email) === false) {
                        return false;
                    }

                    return true;
                }
            } else if (obj.rules.password) {

                let len = (obj.value).length;
                if (len > 0 || len <= 30) {
                    return {
                        cssClass : classObj.error,
                        msg : ( obj.message.password !== null ) ? obj.message.password : msgObj.password
                    }

                } else {
                    if (! isAlphaNum(obj.value)) {
                        return {
                            cssClass : classObj.password,
                            msg : ( obj.message.password !== null ) ? obj.message.password : msgObj.password
                        }
                    } else {
                        return {
                            cssClass : classObj.success,
                            msg : null
                        }
                    }
                }

                function isAlphaNum (password) {
                    var Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

                    if(!password.match(Exp))
                        return false;
                    else
                        return true;
                }

            }  else {
                const len = (obj.value).length;
                if (len > 10) return { cssClass : classObj.success, msg : ''};
                else if (len > 5) return { cssClass : classObj.warning, msg : msgObj.min};
                else if (len > 0) return { cssClass : classObj.error, msg : msgObj.required};
                else return { cssClass : null, msg : '' };
            }
        };

        return returnValid(obj);
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

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.getEmailValidationState()['cssClass'] }>
                                           {/* <ControlLabel>Input with error</ControlLabel>*/}
                                            <FormControl
                                                name="email"
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                placeholder="Email" />
                                            <HelpBlock> {this.getEmailValidationState().msg} </HelpBlock>
                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.getPasswordValidationState()['cssClass'] }>
                                            <FormControl
                                                name="password"
                                                type="text"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                placeholder="Password" />
                                            <HelpBlock> {this.getPasswordValidationState().msg} </HelpBlock>
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