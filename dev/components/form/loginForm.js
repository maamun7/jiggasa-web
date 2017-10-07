import React  from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;

        this.state.full_name = (target.name === 'full_name') ? target.value : this.state.full_name;
        this.state.email = (target.name === 'email') ? target.value : this.state.email

        this.setState({
            full_name: this.state.full_name,
            email: this.state.email
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitSignup(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name="full_name"
                        type="text"
                        value={this.state.full_name}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default LoginForm;