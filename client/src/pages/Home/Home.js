import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <>

    

      <div className="container-fluid mx-10 px-10">
        <div className="logo d-flex justify-content-center align-items-center">
          <h1 className="h1"><i class="bi bi-p-circle-fill"></i></h1>
        </div>
      </div>
      
    <button type="submit" className="btn btn-primary">Submit</button>
    
    </>
    );
  }
}

export default Home;
