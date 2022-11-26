import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

class Add extends Component {
  render() {
    return (
      <>
      <form>
        <div className="layout">
          
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2"/>
        </div>
        <div className="mb-3">
          <label for="mobinenumber" className="form-label">Mobile Number</label>
          <input type="number" className="form-control" id="mobilenum"/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile01">Upload file</label>
          <input type="file" className="form-control" id="inputGroupFile01" />
        </div>
        {/* <div id="map-container-google-1" className="z-depth-1-half map-container" style="height: 500px">
          <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0" allowfullscreen></iframe>
        </div> */}
        <div className="mb-3">
          <label for="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price"/>
        </div>
        <div className="mb-3">
          <label for="Dimension" className="form-label">Dimension</label>
          <input type="number" className="form-control" id="Dimension"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-primary">Reset</button>
        </div>
      </form>

    </>
    );
  }
}

export default Add;