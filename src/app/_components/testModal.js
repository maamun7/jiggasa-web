import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {

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
        width                      : '30%'

    }



};

class TestModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: this.props.setFlag
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
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {

        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.props.onHide}>close</button>
                    <div>I am a modal</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Mobile:
                            <input
                                name="mobile"
                                type="text"
                                value={this.state.mobile}
                                onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <label>
                            Email:
                            <input
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input
                                name="password"
                                type="text"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </label>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default TestModal;