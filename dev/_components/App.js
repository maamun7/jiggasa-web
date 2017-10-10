import React, {Component}   from 'react';
import Header from './header/header';
import Footer from './footer/footer';


export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
               {/* <Header />*/}
                <div id="main-body" className="col-lg-9">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
