import React, { Component} from 'react';

class AuthInfo extends React.Component {

    constructor(props) {
        super(props);
        this.clickedBtn = this.clickedBtn.bind(this);
    }

    clickedBtn() {
        console.log("DEBUGG :", "Json Glispe");
    }

    render() {
        return (
            <button type="button" onClick={this.clickedBtn()} className="btn btn-sm btn-others"> Sign In  </button>
        );
    }
}

export default AuthInfo;