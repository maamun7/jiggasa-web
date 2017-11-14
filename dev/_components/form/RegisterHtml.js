import React  from 'react';
const RegisterHtml = ({openModal}) => {

        return (
            <div>
                <h1> This is register form </h1>
                <input type="text" name="" />
                <button className="btn btn-primary pull-right" onClick={ openModal }> Signin </button>
            </div>
        );


};

export default RegisterHtml;