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

        this.state.full_name = (target.first_name === 'full_name') ? target.value : this.state.full_name;

        if (target.first_name === 'full_name') {
            this.setState({
                full_name: target.value
            });
        }

        if (target.first_name === 'email') {
            this.setState({
                email: target.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let input = {
            "first_name"     :  this.state.full_name,
            'mobile'   :  '01916544540',
            'email'    :  this.state.email,
            'password' :  '123456',
            'gender'   :  'Male',
            'is_admin' :  0
        };

        this.props.submitSignup(input);
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