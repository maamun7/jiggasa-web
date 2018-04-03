import React  from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock }
    from 'react-bootstrap';
import Validator from 'validatorjs';

class SignupHtml extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_admin : 0,
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
        this.signInModal = this.signInModal.bind(this);
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

    signInModal() {
        const { openSignInModal } =  this.props;
        openSignInModal();
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
            this.props.signUp(inputs);
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

        let serverResponse = this.props.signUpFailure;
        let message = '';
        let classType = '';
        if (null != serverResponse) {
            message = serverResponse.res.msg;
            if (serverResponse.res.success) {
                classType = 'success-msg';
            } else {
                classType = 'error-msg';
            }

            console.log("Signup server response :", serverResponse);
        }

        return (
            <div>
                 <span className="error-msg"> { this.props.signupFail } </span>
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
                    <button className="btn btn-success btn-block" type="submit"> Signup </button>
                </form>
                <a href="#" className="font-twelve-px" onClick={ this.signInModal }> Already has an account ? </a>
                </div>
        );
    }
}

export default SignupHtml;
