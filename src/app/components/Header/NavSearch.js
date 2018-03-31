import React, { Component} from 'react';

class NavSearch extends React.Component {

    constructor(props) {
        super(props);
    }

    onKeyPress(e) {
        console.log("charCode :", e.charCode);
    }

    render() {
        return (
            <input className="form-control form-control-dark w-100 input-search-field" type="text" placeholder="Search" onKeyPress={this.onKeyPress} />
        );
    }
}

export default NavSearch;