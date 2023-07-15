import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Post(){
    return (
    
          
            <Card style={{width: "400px"}} className="card col-lg-3 col-md-4 col-sm-12 m-2 py-3 mb-5">
            <Card.Body>
            <img alt="avatar" src="../assets/images/noAvtr.png" />
                <Card.Subtitle className="mb-2 py-3 text-muted">UserName</Card.Subtitle>
                <Card.Text className="textArea">
                Some quick example text to build on the card title and make up the
                bulk of the card's content. <a href="#a" className="a">Read More</a>
                </Card.Text>
                <div className="btn-grp">
                <Button style={{marginRight: "10px"}} className="answer" variant="light">Answer</Button>
                <Button className="upvote" variant="light">⬆️</Button>
                </div>
            </Card.Body>
            </Card>    
    
    );
}

export default Post;