import React from "react";
import Card from "./Card";

const Service = () =>{
  return(<React.Fragment>
    <section className="my-5">
      <h2 className="text-center text-capatalize font-weight-bold text-primary">Our Service</h2>
      <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
          <Card />
          </div>
          <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
            <Card />
          </div>
          <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
            <Card />
          </div>
          <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
            <Card className="mt-5" />
          </div>
          <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
            <Card className="mt-5" />
          </div>
          <div className="col-lg-4 col-md-4 col-10 d-block m-auto">
            <Card className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>)
}

export default Service;