import './App.css';
import Home from './home';
import Nav from './Nav';
import Transection from './transection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Make_payment from './Make_payment';
import { useState } from 'react';
import History from './History';
function App() {
  let [a,seta]=useState([20000,20000,20000,20000,20000,20000,20000,20000,20000,20000])
  let wow=[20000,20000,20000,20000,20000,20000,20000,20000,20000,20000];
  let [history,sethistory]=useState([]);
  let money_subtractor=(i,j,amount ) =>{
    for(let x=0;x<10;x++){
      if(x===i-1){wow[x]=a[x]-amount}
      else if(x===j-1){wow[x]=a[x]+amount}
      else {wow[x]=a[x]}    
    }
    seta(wow);
    sethistory(history.concat([[i,j,amount]]))
  }
 
  let person=new Map();
  person.set("person1", a[0]);
  person.set("person2", a[1]);
  person.set("person3", a[2]);
  person.set("person4", a[3]);
  person.set("person5", a[4]);
  person.set("person6", a[5]);
  person.set("person7", a[6]);
  person.set("person8", a[7]);
  person.set("person9", a[8]); 
  person.set("person10", a[9]);
  return (
    <Router>
    <div className="App">
      <Nav />
    <Routes>
      
        <Route path="/" element={<Home/>}/> 
        <Route path="/history" element={<History history={history} />}/>
        <Route path="/transaction" element={<Transection persons={person}/>}/>
        <Route path="/make_payment" element={<Make_payment person={person} money_subtractor={money_subtractor}/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;