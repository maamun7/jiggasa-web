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
            <form className="navbar-form navbar-left">
                <div className="form-group" style={ { display:"inline"} }>
                    <div className="input-group" style={ { display:"table"} }>
                        <span className="input-group-addon" style={ { width:"1%"} }><span className="fa fa-search"></span></span>
                        <input className="form-control" name="search" placeholder="Search Here" autocomplete="off" autofocus="autofocus" type="text" />
                    </div>
                </div>
            </form>
        );
    }
}

export default NavSearch;