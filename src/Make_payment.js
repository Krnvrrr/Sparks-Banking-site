import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Make_payment(props) {
  let handleclick = () => {
    if (props.person.get(text1) - parseInt(text3) >= 0) {
      props.money_subtractor(
        parseInt(text1.slice(6, 7)),
        text2.slice(6, 7),
        parseInt(text3)
      );
    } else {
      alert("insufficient balance")
    }
  };
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const handleonchange1 = (event) => {
    setText1(event.target.value);
  };
  const handleonchange2 = (event) => {
    setText2(event.target.value);
  };
  const handleonchange3 = (event) => {
    setText3(event.target.value);
  };
  return (
    <div
      className="container mt-5"
    >
      <div className="mb-3 d-flex flex-wrap justify-content-center">
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>
            Pay As :
          </label>
          <input
            type="email"
            value={text1}
            onChange={handleonchange1}
            key="name"
            className="form-control mx-3"
            id="exampleFormControlInput1"
            placeholder="person x"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>
          Recipient's Name:
          </label>
          <input
            type="email"
            value={text2}
            onChange={handleonchange2}
            key="amount"
            className="form-control mx-3"
            id="exampleFormControlInput2"
            placeholder="person y"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:'white'}}>
            Enter amount
          </label>
          <input
            type="email"
            value={text3}
            onChange={handleonchange3}
            key="amount"
            className="form-control mx-3"
            id="exampleFormControlInput2"
            placeholder="...$"
          />
        </div>
      </div>
      <Link
        onClick={handleclick}
        to="/transaction"
        className="btn btn-outline-primary"
      >
        Pay Money
      </Link>
    </div>
  );
}
