import React from 'react';
import Question from './Question';

const Home = ({
        isAuthenticated,
        searchResponse
    }) => (
            <section>
                <div className="container my-3">
                    { isAuthenticated ? (
                        <div className="row">
                            <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                                <div className="body_left">
                                    <div className="clearfix">
                                        <span className="pull-left">Feed</span>
                                        <span className="pull-right"><a href="#">Edit</a></span>
                                    </div>
                                    <hr/>
                                    <ul className="list-unstyled">
                                        <li className=""><a href="#"> Cras justo odio</a></li>
                                        <li className=""><a href="#"> Dapibus ac facilisis in</a></li>
                                        <li className=""><a href="#"> Morbi leo risus</a></li>
                                        <li className=""><a href="#"> Porta ac consectetur ac</a></li>
                                        <li className=""><a href="#"> Vestibulum at eros</a></li>
                                    </ul>
                                </div>
                            </div>                        
                            <div className="col-12 col-sm-7 col-md-7 col-lg-7">
                                <Question searchResponse={searchResponse} />
                            </div>
                            <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                                <div className="body_right">
                                    <div className="card">
                                        <div className="card-header">
                                            Improve Your Feed
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled">
                                                <li className=""><a href="#"><i className="fa fa-check text-muted"></i> Cras justo odio</a></li>
                                                <li className=""><a href="#"><i className="fa fa-check text-muted"></i> Dapibus ac facilisis in</a></li>
                                                <li className=""><a href="#"><i className="fa fa-check text-muted"></i> Morbi leo risus</a></li>
                                                <li className=""><a href="#"><i className="fa fa-check text-muted"></i> Porta ac consectetur ac</a></li>
                                                <li className=""><a href="#"><i className="fa fa-check text-muted"></i> Vestibulum at eros</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className="row">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                                <Question searchResponse={searchResponse} />
                            </div> 
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="body_right">
                                    <h4>Related Questions</h4>
                                    <hr/>
                                    <ul className="list-unstyled">
                                        <li><a href="#">What can we do with PHP ?</a></li>
                                        <li><a href="#">Which is better, PHP or Python? Why?</a></li>
                                        <li><a href="#">Should I learn PHP today? Is it still worth it?</a></li>
                                        <li><a href="#">What is PHP threading?</a></li>
                                        <li><a href="#">What is the new language to replace PHP?</a></li>
                                        <li><a href="#">What is PHP CodeIgniter?</a></li>
                                        <li><a href="#">What are PHP extensions?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    )}
                </div>
            </section>
            );
export default Home;
