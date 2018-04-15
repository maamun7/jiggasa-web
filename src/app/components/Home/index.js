import React from 'react';
const Home = () => (
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <div className="left_feed clearfix">
                                <div><span className="pull-left">Feeds</span> <span className="pull-right"><a href="#">Edit</a></span></div>
                                <hr/>
                                <ul>
                                    <li><a href="#">Top Stories</a></li>
                                    <li><a href="#">New Questions</a></li>
                                    <li><a href="#">Bookmarked Answers</a></li>
                                    <li><a href="#">Links</a></li>
                                    <li><a href="#">Fine Art</a></li>
                                    <li><a href="#">Sports</a></li>
                                    <li><a href="#">Photography</a></li>
                                    <li><a href="#">Cooking</a></li>
                                    <li><a href="#">Top Stories</a></li>				
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-7 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    What is Lorem Ipsum?
                                </div>
                                <div className="panel-body">
                                    <p>	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="panel-footer">Panel footer</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="panel panel-default right_feed">
                                <div className="panel-heading">
                                    Improve Your Feed
                                </div>
                                <div className="panel-body">
                                    <ul>
                                        <li>
                                            <i className="fa fa-check text-success"></i><a href="#"> Visit your feed</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Follow 9 more topics</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Find your friends on Quora</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Upvote 5 more good answers</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Ask your first question</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Add 3 credentials</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check text-muted"></i><a href="#"> Answer a question</a>
                                        </li>
                                    </ul>					
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
export default Home;

/*
class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: true
        };

        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmitSignin = this.handleSubmitSignin.bind(this);


        if (getIsAuthenticated()) {
            this.state = {
                showModal: false
            };
        }
    }

    handleSubmitSignup(inputs) {
        this.props.executeSignup(inputs);
    }

    handleSubmitSignin(inputs) {
        this.props.executeSignin(inputs);
    }

    handleClick(event) {
        this.setState({
            showModal: true
        });
    }

    render() {

        console.log("Show modal status :", this.state.showModal);
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="main-content col-sm-8 col-md-8 col-lg-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </div>

                        <div className="right-side-bar col-sm-4 col-md-4 col-lg-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>);
    }
}*/
