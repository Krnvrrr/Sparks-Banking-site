import React from "react";
import {Link} from "react-router-dom";
export default function Transection(props) {
  
  let array = [
    "person1",
    "person2",
    "person3",
    "person4",
    "person5",
    "person6",
    "person7",
    "person8",
    "person9",
    "person10",
  ];
  var x = 0;
  return (
    <div className="container" style={{ margin: "10px" }}>
      {array.map((element) => {
        x = x + 1;
        return (
          <div className="card w-75 mb-3 " key={`person${x}`}>
            <div className="card-body">
              {" "}
              <div></div>
              <span className="card-text">
                <div className="d-flex justify-content-between">
                  
                  <div id={`person${x}`} key={`person${x}`}><i className="fa-regular fa-user"></i> {element} </div>{" "}
                  <div>person{x}@gmail.com  </div>{" "}
                  <div> {props.persons.get(element)} </div>
                  <div>
                    {" "}
                    
                    <Link to="/make_payment"  className="btn btn-outline-primary">Pay Money</Link>
                  </div>
                </div>
              </span>
            </div>
          </div>
        );
        
      })}
      
    </div>
  );
}
