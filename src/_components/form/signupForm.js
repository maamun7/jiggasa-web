import React  from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: '',
            password: '',
            gender: 'Male',
            is_admin: '0'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;

        if (target.name === 'name') {
            this.setState({
                name: target.value
            });
        }

        if (target.name === 'mobile') {
            this.setState({
                mobile: target.value
            });
        }

        if (target.name === 'email') {
            this.setState({
                email: target.value
            });
        }

        if (target.name === 'password') {
            this.setState({
                password: target.value
            });
        }

      /*  if (target.name === 'gender') {
            this.setState({
                gender: target.value
            });
        }*/
    }

    handleSubmit(e) {
        e.preventDefault();
       // console.log("Submitted data :", this.state);
        this.props.submitSignup(this.state);
    }

    render() {
        return (
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
        );
    }
}

export default LoginForm;