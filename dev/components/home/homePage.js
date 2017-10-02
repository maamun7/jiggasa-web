import React, {Component} from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const HomePage = () => (
    <Jumbotron>
        <ListGroup>
            <ListGroupItem href="#link1">Sign</ListGroupItem>
            <ListGroupItem href="#link2">Signup</ListGroupItem>
        </ListGroup>
    </Jumbotron>
);

export default HomePage;


