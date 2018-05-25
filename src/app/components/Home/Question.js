import React, { Component} from 'react';

class Question extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let questionTitle = 'No question !';
        if (this.props.searchResponse != null) {
            questionTitle = this.props.searchResponse.title;
        }

        return (           
            <div className="body_main mb-3">
                <div className="card">
                    <div className="card-header">
                        {questionTitle}
                    </div>
                    <div className="card-body">
                        <p>	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="card-footer">
                        2 days ago
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;