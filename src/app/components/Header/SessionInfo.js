import React, { Component } from 'react';

class SessionInfo extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        console.log('this.props :', this.props);
    }

    signOut() {
        const { signOut } =  this.props;
        signOut();
    }

    render() {
        return (
            <div class="dropdown">
                <div class="dropdown-toggle" type="button" data-toggle="dropdown">
                    { this.props.user.name }
                    <span class="caret"></span>
                </div>
                <ul class="dropdown-menu">
                    <li> <span onClick={this.signOut} > Sign out </span></li>
                </ul>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default SessionInfo;
