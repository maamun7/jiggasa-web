import React  from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock }
    from 'react-bootstrap';
import Validator from 'validatorjs';

class LoginHtml extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailClass   : null,
            emailMsg     : null,

            password: '',
            passwordClass   : null,
            passwordMsg     : null
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSignin = this.handleSubmitSignin.bind(this);
        this.newRegister = this.newRegister.bind(this);


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

    newRegister() {
        const { openRegModal } =  this.props;
        openRegModal();

    }

   /* getNameValidationState() {
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
    }*/

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
            this.props.login(inputs);
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


            console.log("Login submit : ", inputs);
            this.props.login(inputs);
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

                <div id="home-modal-container">
                    <div className="row grid-divider">
                        <div className="col-sm-12">
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

                <a onClick={this.newRegister}> New register </a>
            </div>
        );
    }
}

export default LoginHtml;
