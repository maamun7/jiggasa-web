import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';


class HomePage extends Component {
    componentDidMount() {
       // this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
       // return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        return (
                <div>
                    <Jumbotron>
                        <h1> Hello Banlgadesh </h1>
                    </Jumbotron>
                </div>
            );
        };
}

// export default HomePage;


function mapStateToProps(state) {
    const { users, authentication } = state;
  //  const { user } = authentication;
    return {
        user : ''
      //  users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };