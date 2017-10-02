import React, { Component }  from 'react';
import Header from './header/header';
import Footer from './footer/footer';


/*const App = (props) => {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
}*/

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default App;