import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Home from '../../components/Home'


const HomeContainer = props => <Home {...props} />;

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {

})(HomeContainer);