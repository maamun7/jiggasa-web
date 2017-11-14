import React  from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock }
    from 'react-bootstrap';

const LoginHtml = ({
   openRegModal,
   handleSubmitSignin,
   handleInputChange,
}) => {

        return (
            <div>
                <h1> This is login form </h1>
                <button className="btn btn-primary pull-right" onClick={ openRegModal }> Signup </button>

                <div id="home-modal-container">
                    <div className="row grid-divider">
                        <div className="col-sm-6">
                            <div className="col-padding">
                                <form onSubmit={ handleSubmitSignin } >

                                    <FormGroup controlId="formValidationSuccess1" >
                                        {/* <ControlLabel>Input with error</ControlLabel>*/}
                                        <FormControl
                                            name="username"
                                            type="text"
                                            placeholder="Email" />
                                        <FormControl.Feedback />
                                        <HelpBlock> </HelpBlock>

                                    </FormGroup>

                                    {/*<FormGroup controlId="formValidationSuccess1" validationState={  }>
                                        <FormControl
                                            name="pass"
                                            type="text"
                                            value={}
                                            onChange={ handleInputChange }
                                            placeholder="Password" />
                                        <FormControl.Feedback />
                                        <HelpBlock> {} </HelpBlock>
                                    </FormGroup>*/}

                                    <Button bsStyle="success" bsSize="sm" block type="submit"> Signin </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default LoginHtml;