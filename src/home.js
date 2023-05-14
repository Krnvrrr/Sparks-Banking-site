import React from "react";
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-center" style={{margin:"5px"}}>
        <div className="card" style={{width: "20rem",height:"25rem"}}>
          <img src="https://img.freepik.com/free-photo/portrait-brunette-girl-paying-shopping-online-with-mobile-phone-credit-card-purchase-app-standing-white-background-copy-space_176420-47217.jpg?size=626&ext=jpg&ga=GA1.2.1688124517.1679381203&semt=ais" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-text">
              Do banking easily with simple steps.<br/>
              Make Money Move
            </h4>
          </div>
        </div>

        <div className="card">
  <img src="https://img.freepik.com/free-vector/credit-card-landing-page-payment-concept_23-2148298750.jpg?w=740&t=st=1679383335~exp=1679383935~hmac=15144164ce41053d0539ba00932d607b4ab16fd936d3674b45fc1ea84472d154" width="400px" height="550px"  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Go to transactions</h5>
    <p className="card-text">click below to go to transactions</p>
    <Link to="/transaction" className="btn btn-outline-primary">Make payment</Link>
  </div>
</div>
      </div>
    </div>
  );
}
