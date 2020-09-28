import React from "react";
import Navbar from "./Navbar";
import Pic from "../src/images/Pic1.jpg";

const Common = (props) =>{
  return(<React.Fragment>
          <section id="header" className="d-flex justify-content-center flex-column">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-10 d-block m-auto d-flex justify-content-center flex-column">
            <h2> {props.name} <br /> <strong className="brand-name">Web Developers</strong></h2>
            <p>We are the best software engineers</p>
            <div className="btn">
              <button>Get Started</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-10 d-block m-auto d-flex justify-content-center">
            <img src={Pic} alt="pic1" className="img-fluid animated mt-5" />
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <p className="text-capatalize text-center bg-dark text-success p-2 mb-0">Web Developers &copy; 2020</p>
      </footer>
    </section>
  </React.Fragment>)
}

export default Common