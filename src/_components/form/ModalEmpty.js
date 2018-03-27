import React from 'react';
import Modal from 'react-modal';
import LoginHtml from '../../_components/form/LoginHtml';
import RegisterHtml from '../../_components/form/RegisterHtml';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(204, 204, 204, 0.50)'
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
        width                      : '30%',
        height                     : '350px'
    }
};

class HiModal extends React.Component {

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
    }

    openModal() {

      /*  let loginHtml = <LoginHtml
            openRegModal={this.openRegModal}
            user={this.props.user}
            login={this.props.login}
            loginFail={this.props.loginFail}
            logout={this.props.logout}
        />;*/

      //  this.setState({htmlTemp: loginHtml});
        this.setState({isOpenSignUpModel: true});
        this.setState({modalIsOpen: true});

      //  console.log("New this.props", this.props);
    }

    openRegModal() {
        this.setState({htmlTemp: <RegisterHtml openModal={this.openModal}
                                               register={this.props.register} />});
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    afterOpenModal() { }

    render() {
        const isOpenSignUpModel = this.state.isOpenSignUpModel;
        return (
            <span>
                <button type="button" onClick={this.openModal } className="btn btn-sm btn-others"> Sign In  </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/*<div> {this.state.htmlTemp} </div>*/}
                    {isOpenSignUpModel ? (
                    <LoginHtml
                        openRegModal={this.openRegModal}
                        user={this.props.user}
                        login={this.props.login}
                        loginFail={this.props.loginFail}
                        logout={this.props.logout}
                    /> ) : (<RegisterHtml openModal={this.openModal}
                                          register={this.props.register} />)}

                </Modal>
            </span>
        );
    }
}

export default HiModal;