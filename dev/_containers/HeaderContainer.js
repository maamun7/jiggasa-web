import React from 'react';
import { connect } from 'react-redux';
import Header from '../_components/header/header';

const HeadContainer = props => <Header {...props} />;

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, {
})(HeadContainer);