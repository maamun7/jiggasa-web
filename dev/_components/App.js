import React, {Component}   from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { verifyAuthToken, getAuthInfo } from '../_utils/helper';


export default class App extends Component {
    constructor(props){
        super(props);
        console.log("Token all :", getAuthInfo());
    }

    render() {

        let header = null;
        let footer = null;
        if (verifyAuthToken()) {
            header = <Header />;
            footer = <Footer />;
        }

        return (
            <div>
                { header }
                <div id="main-body" className="col-lg-9">
                    {this.props.children}
                </div>
                { footer }
            </div>
        )
    }
}
