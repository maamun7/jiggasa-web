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
            <form className="input-group">
                <div className="inner-addon right-addon">
                    <i className="nav-search-icon fa fa-search" title="Home" aria-hidden="true"></i>
                    <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </div>                          
            </form>	
        );
    }
}

export default NavSearch;