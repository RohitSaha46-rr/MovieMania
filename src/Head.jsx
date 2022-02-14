import React, { useState } from 'react';
import './head.css';

const Head = () => {
  const[input,updated_input]=useState("");
  const input_change=(elem)=>{
    updated_input(elem.target.value);
  }
  const submit=()=>{
  

  }
  
  
  <div className='head'>
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">MovieMania</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
        
      </ul>
      
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={input_change} value={input}></input>
        <button className="btn btn-outline-success"  onClick={submit}>Search</button>
      
    </div>
  </div>
</nav>

  </div>

};
export {input1};
export default Head;


