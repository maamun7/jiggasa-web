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
            <div className="dropdown">
                <button className="btn btn-sm btn-others dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { this.props.user.name }
                </button>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item" onClick={this.signOut} > Sign out </a>
                </div>
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default SessionInfo;
