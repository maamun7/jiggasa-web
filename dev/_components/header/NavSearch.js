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
            <div className="nav-search">
                <i className="nav-search__icon ion-search" />
                <input type="text" onKeyPress={this.onKeyPress}
                       placeholder="SEARCH" />
            </div>
        );
    }
}

export default NavSearch;