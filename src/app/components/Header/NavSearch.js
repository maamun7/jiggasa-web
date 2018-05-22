import React, { Component} from 'react';

class NavSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onKeyPress(e) {
        console.log("charCode :", e.charCode);
    }

    handleInputChange(event) {
        const target = event.target;
        if (target.name === 'keyword') {
            this.setState({
                keyword: target.value
            });
        }
    }

    handleSubmit(event) {
        var code = event.keyCode || event.which;
        if(code === 13) {
            event.preventDefault();
            let keyword = this.state.keyword;
            if(keyword != '') {
                this.props.search(keyword);
            }
        }
    }

    render() {
        return (
            <form className="input-group" >
                <div className="inner-addon right-addon">
                    <i className="nav-search-icon fa fa-search" title="Home" aria-hidden="true"></i>
                    <input 
                        name="keyword" 
                        className="form-control form-control-sm mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={this.state.keyword} 
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleSubmit}
                         />
                </div>                          
            </form>	
        );
    }
}

export default NavSearch;