import React from "react";

const Contact = () =>{
  return(<React.Fragment>
    <section className="my-5">
      <h2 className="text-capatalize text-center font-weight-bold text-primary">Contact Us</h2>
      <h4 className="text-uppercase text-center text-danger">HOW CAN WE HELP YOU?</h4>
            <p className="text-center text-warning font-weight-bold">Contact Us(All fields with * are mandatory)</p>
          <form className="w-50 m-auto my-5">
              <div className="form-group">
                  <input type="text" placeholder="Enter Your Name" className="form-control" />
              </div>
              <div className="form-group">
                  <input type="text" placeholder="Mobile No." className="form-control" />
              </div>
              <div className="form-group">
                  <input type="email" placeholder="Enter Your Email id" className="form-control" />
              </div>
              <div className="form-group">
                  <input type="text" placeholder="Subject*" className="form-control" />
              </div>
              <div className="form-group">
                  <input type="submit" class="btn btn-success" />
              </div>
          </form>
    </section>
  </React.Fragment>)
}

export default Contact;