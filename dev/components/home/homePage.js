import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const HomePage = () => (
    <Jumbotron>
        <ListGroup>
            <ListGroupItem><Link to="/signin">Signin</Link></ListGroupItem>
            <ListGroupItem><Link to="/signup">Signup</Link></ListGroupItem>
        </ListGroup>
    </Jumbotron>
);

export default HomePage;


