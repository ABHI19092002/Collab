import React from "react";
import Button from 'react-bootstrap/Button';

function Login(){
    return (
        <div className="login-wrapper">
            <h4 className="display-4">Collaborators</h4>

            <p className="display-6">Sign in to your Account.</p>
            <div className="login-btn">
            <Button className="mb-3" variant="outline-dark"><img alt="ggl" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" /> Continue with Google</Button>
            <Button variant="outline-dark">Skip for Now</Button>
            </div>
        </div>
    );
}

export default Login;