import React from "react";
import Navigbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Post from "./Post";



function Home(){
    return (

        <div className="home-pg m-0">
       
        {/* navbar */}
          <Navigbar />

        {/* Home Section   */}
          <div className="home d-sm-flex bg-info">
          <div className="home-left ml-md-2">
            <h1>Get All Your Coding Questions Answered Here.</h1>
            <br />
            <div className="home-btn d-sm-flex flex">
            <Button className="ask">Ask Question</Button>
            <Button className="explore" variant="light">Domains</Button>
            </div>
          </div>

  
            <img className="img-fluid" alt="Avtr" src="../assets/images/result.png" />
    
          </div> 

        {/* Featured Section */}
          <h4>Featured Questions</h4> 
          <div className="row cards d-flex justify-content-evenly">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          </div>

        {/* Explore Section */}
          <h4>Explore Questions</h4> 
          <div className="row cards d-flex justify-content-evenly">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          </div>
        </div>  
      
    );
}

export default Home;