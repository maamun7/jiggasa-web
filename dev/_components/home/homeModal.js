import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock }
from 'react-bootstrap';
import Validator from 'validatorjs';

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
            name        : '',
            nameClass   : null,
            nameMsg     : null,

            email: '',
            emailClass   : null,
            emailMsg     : null,

            password: '',
            passwordClass   : null,
            passwordMsg     : null,

            is_admin: 0,

            username: '',
            usernameClass   : null,
            usernameMsg     : null,

            pass: '',
            passClass   : null,
            passMsg     : null
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSignin = this.handleSubmitSignin.bind(this);


    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
       // this.subtitle.styles.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    getNameValidationState() {
        var validation = new Validator({
            name: this.state.name
        },
        {
            name: 'required|min:3|max:10'
        });

        if (validation.fails()) {
            return {
                cssClass : 'error',
                msg : validation.errors.first('name')
            }
        } else if (validation.passes()) {
            return {
                cssClass : 'success',
                msg : null
            }
        } else {
            return {
                cssClass : null,
                msg : null
            }
        }
    }

    handleInputChange(event) {
        const target = event.target;

        if (target.name === 'name') {
            this.setState({
                name: target.value
            });
            this.singleValidation('name', target.value, 'required|min:3|max:50');
        }

        if (target.name === 'email') {
            this.setState({
                email: target.value
            });
            this.singleValidation('email', target.value, 'required|email');
        }

        if (target.name === 'password') {
            this.setState({
                password: target.value
            });
            this.singleValidation('password', target.value, 'required|min:6|alpha_num|max:100');
        }

        /// For signin

        if (target.name === 'username') {
            this.setState({
                username: target.value
            });
            this.singleValidation('username', target.value, 'required|email');
        }

        if (target.name === 'pass') {
            this.setState({
                pass: target.value
            });
            this.singleValidation('pass', target.value, 'required|min:6|alpha_num|max:100');
        }
    }

    singleValidation(stateName, value, rulesStr) {
        var validation = new Validator({
                [stateName] : value
            },
            {
                [stateName]: rulesStr
            },{
                "required.username": "Email field is required !",
                "email.username": "Email field must be valid email !",
                "required.pass": "Password field is required !",
                "min.pass": "Password minimum 6 characters !",
                "max.pass": "Password maximum 100 characters !"
            });

        if (validation.fails()) {
            this.setState({
                [stateName + 'Class'] : 'error',
                [stateName + 'Msg'] : validation.errors.first(stateName)
            });
        } else if (validation.passes()) {
            this.setState({
                [stateName + 'Class'] : 'success',
                [stateName + 'Msg'] : null
            });
        } else {
            this.setState({
                [stateName + 'Class'] : null,
                [stateName + 'Msg'] : null
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let validation = new Validator({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }, {
            name: 'required|min:3|max:50',
            email: 'required|email',
            password: 'required|min:6|alpha_num|max:100',
        });

        if (validation.fails()) {
            if (validation.errors.first('name')) {
                this.setState({
                    'nameClass' : 'error',
                    'nameMsg' : validation.errors.first('name')
                });
            }

            if (validation.errors.first('email')) {
                this.setState({
                    'emailClass' : 'error',
                    'emailMsg' : validation.errors.first('email')
                });
            }

            if (validation.errors.first('password')) {
                this.setState({
                    'passwordClass' : 'error',
                    'passwordMsg' : validation.errors.first('password')
                });
            }
        }
        else {
            let inputs = {
                name : this.state.name,
                email : this.state.email,
                password : this.state.password,
                is_admin : this.state.is_admin
            };
            this.props.submitSignup(inputs);
        }
    }

    handleSubmitSignin(e) {
        e.preventDefault();

        let validation = new Validator({
            username: this.state.username,
            pass: this.state.pass
        }, {
            username: 'required|email',
            pass: 'required|min:6|alpha_num|max:100'
        },{
            "required.username": "Email field is required !",
            "email.username": "Email field must be valid email !",
            "required.pass": "Password field is required !",
            "min.pass": "Password minimum 6 characters !",
            "max.pass": "Password maximum 100 characters !"
        });

        if (validation.fails()) {


            if (validation.errors.first('username')) {
                this.setState({
                    'usernameClass' : 'error',
                    'usernameMsg' : validation.errors.first('username')
                });
            }

            if (validation.errors.first('pass')) {
                this.setState({
                    'passClass' : 'error',
                    'passMsg' : validation.errors.first('pass')
                });
            }
        }
        else {
            let inputs = {
                email : this.state.username,
                password : this.state.pass
            };
            this.props.submitSignin(inputs);
        }
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

            console.log("DEBUGG :", serverResponse);
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

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.state.nameClass }>
                                            <FormControl
                                                name="name"
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                placeholder="Name"/>
                                            <FormControl.Feedback />
                                            <HelpBlock> {this.state.nameMsg} </HelpBlock>
                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.state.emailClass }>
                                           {/* <ControlLabel>Input with error</ControlLabel>*/}
                                            <FormControl
                                                name="email"
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                placeholder="Email" />
                                            <FormControl.Feedback />
                                            <HelpBlock> {this.state.emailMsg} </HelpBlock>

                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.state.passwordClass }>
                                            <FormControl
                                                name="password"
                                                type="text"
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                placeholder="Password" />
                                            <FormControl.Feedback />
                                            <HelpBlock> {this.state.passwordMsg} </HelpBlock>
                                        </FormGroup>

                                        <Button bsStyle="success" bsSize="sm" block type="submit"> Signup </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-padding">
                                    <form onSubmit={this.handleSubmitSignin}>

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.state.usernameClass }>
                                            {/* <ControlLabel>Input with error</ControlLabel>*/}
                                            <FormControl
                                                name="username"
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.handleInputChange}
                                                placeholder="Email" />
                                            <FormControl.Feedback />
                                            <HelpBlock> {this.state.usernameMsg} </HelpBlock>

                                        </FormGroup>

                                        <FormGroup controlId="formValidationSuccess1" validationState={ this.state.passClass }>
                                            <FormControl
                                                name="pass"
                                                type="text"
                                                value={this.state.pass}
                                                onChange={this.handleInputChange}
                                                placeholder="Password" />
                                            <FormControl.Feedback />
                                            <HelpBlock> {this.state.passMsg} </HelpBlock>
                                        </FormGroup>

                                        <Button bsStyle="success" bsSize="sm" block type="submit"> Signin </Button>
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