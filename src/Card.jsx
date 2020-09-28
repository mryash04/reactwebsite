import React from "react";
import Navbar from "./Navbar";
import Imagecard from "../src/images/Pic2.jpg";

const Card = () =>{
  return(<React.Fragment>
              <div class="card">
            <img class="card-img-top" src={Imagecard} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
  </React.Fragment>)
}

export default Card;