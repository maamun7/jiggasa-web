import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom';
import Help from './components/App'


const appComponentcom = appComponent;

class Help extends React.Component {
    render() {
        return (
            <div>
                <h1> --Hello-- </h1>
            </div>
        );
    }
}

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
        </div>
    );
};

console.log("Hala" + appComponent);

render(
    <div>
        <appComponent /> </div>  ,
    document.getElementById('main')
);

/*
render(<Help />,
    document.getElementById('main'));*/
