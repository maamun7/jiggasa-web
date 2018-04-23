import React from 'react';
const Home = () => (
            <section>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                            <div className="body_main mb-3">
                                <div className="card">
                                    <div className="card-header">
                                        What is Lorem Ipsum?
                                    </div>
                                    <div className="card-body">
                                        <p>	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                    <div className="card-footer">
                                        2 days ago
                                    </div>
                                </div>
                            </div>
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
                </div>
            </section>);
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
