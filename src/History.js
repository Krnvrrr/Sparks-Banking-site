import React from "react";

export default function History(props) {
    let {history}=props;
    console.log(history)
  return ( history?
    <div>
      {history.map((element) => {
        return(
          <div className="card">
            <div className="card-body">{element[2]} $ are sent from person{element[0]} to person{element[1]}</div>
          </div>
        );
      })}
    </div>:<div className="card"><div className="card-body"> No Transection made yet</div></div>
  );
}
