import React, { Component } from "react";
import './Home.css'
import { NavLink } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <>

        <div className="container-fluid mx-10 px-10">
        <div className="logo d-flex justify-content-center align-items-center">
          <h1 className="h1"><i class="bi bi-p-circle-fill"></i></h1> <br />
          </div>
          </div>

      <div className="container-fluid mx-10 px-10">
        <div className="logo d-flex justify-content-center align-items-center">
          <h1 className="h1">Looking for a Place to park!</h1>
        </div>
      </div>
      
      <div className="container-fluid mx-10 px-10">
        <div className="logo d-flex justify-content-center align-items-center">
        <NavLink to="/add" className="btn btn-primary">Request Parking Access</NavLink> <br /> <br /> <br /> <br />
          </div>
          </div>
    
      

    <div className="container"> 
  <div className="item item1" > </div> 
  <div className="item item2"> </div>
  <div className="item item3"> </div>
  <div className="item item4"> </div>
  <div className="item item5"> </div>
  <div className="item item5"> </div>
  </div>
  
    
    </>
    );
  }
}

export default Home;
