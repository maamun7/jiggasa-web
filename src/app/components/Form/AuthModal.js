import React from 'react';
import Modal from 'react-modal';
import SigninHtml from './SigninHtml';
import SignupHtml from './SignupHtml';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : '#8a8a8a'
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
        width                      : '35%',
        height                     : '380px'
    }
};

class AuthModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            isOpenSignUpModel : false,
            openSignupModal : false,

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
        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.openSignInModal = this.openSignInModal.bind(this);
    }

    openModal() {
        this.setState({isOpenSignUpModel: false});
        this.setState({modalIsOpen: true});
    }

    openSignUpModal() {
        this.setState({isOpenSignUpModel: true});
    }

    openSignInModal() {
        this.setState({isOpenSignUpModel: false});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    afterOpenModal() {
        this.subtitle.style.color = '#000';
    }

    render() {
        const isOpenSignUpModel = this.state.isOpenSignUpModel;
        customStyles.content.height = isOpenSignUpModel ? '512px' : '428px';
        const modalHeadTxt = isOpenSignUpModel ? 'User sign up' : 'User sign in';
        return (
            <span>
                <li className="nav-item"  onClick={this.openModal } ><button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">Sign In</button></li>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" ref={subtitle => this.subtitle = subtitle}> { modalHeadTxt } </h5>
                            <button type="button" className="close" onClick={this.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                isOpenSignUpModel ? (
                                    <SignupHtml
                                        openModal={this.openModal}
                                        openSignInModal={this.openSignInModal}
                                        signUp={this.props.signUp}
                                        signupResponse={this.props.signupResponse}
                                        signupFail={this.props.signupFail}
                                        />
                                 ) : (    
                                    <SigninHtml
                                        openSignUpModal={this.openSignUpModal}
                                        signupResponse={this.props.signupResponse}
                                        user={this.props.user}
                                        signIn={this.props.signIn}
                                        signinFail={this.props.signinFail}
                                        />
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.closeModal} className="btn btn-danger">Close</button>
                        </div>
                    </div>
                </Modal>
            </span>
        );
    }
}

export default AuthModal;