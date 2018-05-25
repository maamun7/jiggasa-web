import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getIsAuthenticated } from '../App/selectors';


const HomeContainer = props => <Home {...props} />;

const mapStateToProps = (state) => {
    return {
        isAuthenticated: getIsAuthenticated(state),
        searchResponse: state.home.searchResponse
    }
};

export default connect(mapStateToProps, {

})(HomeContainer);