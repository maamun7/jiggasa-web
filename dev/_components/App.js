import React, {Component}   from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { verifyAuthToken, getAuthInfo } from '../_utils/helper';
import { Router, Route } from 'react-router-dom';
import HomePage from '../_components/home';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { PrivateRoute } from '../_components/PrivateRoute';
import { alertActions } from '../_actions'


class App extends Component {
    constructor(props){
        super(props);
     //   console.log("Token all :", getAuthInfo());

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {

        /*let header = null;
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
        )*/

        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;