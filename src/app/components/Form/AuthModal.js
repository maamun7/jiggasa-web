import React from 'react';
import Modal from 'react-modal';
import LoginHtml from './/LoginHtml';
import RegisterHtml from './/RegisterHtml';

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

class EmptyModal extends React.Component {

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
        this.openRegModal = this.openRegModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
    }

    openModal() {
        this.setState({isOpenSignUpModel: true});
        this.setState({modalIsOpen: true});
    }

    openRegModal() {
        this.setState({isOpenSignUpModel: false});
    }

    openLoginModal() {
        this.setState({isOpenSignUpModel: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    afterOpenModal() {
        this.subtitle.style.color = '#000';
    }

    render() {
        const isOpenSignUpModel = this.state.isOpenSignUpModel;
        customStyles.content.height = isOpenSignUpModel ? '415px' : '500px';
        const modalHeadTxt = isOpenSignUpModel ? 'User sign in' : 'User sign up';

        return (
            <span>
                <button type="button" onClick={this.openModal } className="btn btn-sm btn-others"> Sign In  </button>
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
                                <LoginHtml
                                    openRegModal={this.openRegModal}
                                    user={this.props.user}
                                    login={this.props.login}
                                    loginFail={this.props.loginFail}
                                    logout={this.props.logout}
                                /> ) : (
                                <RegisterHtml
                                    openModal={this.openModal}
                                    openLoginModal={this.openLoginModal}
                                    signUp={this.props.signUp}
                                    signUpFailure={this.props.signUpFailure}
                                    signUpSuccess={this.props.signUpSuccess}
                                />)
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

export default EmptyModal;