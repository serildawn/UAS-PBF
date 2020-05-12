import React, { Component } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import '../App.css';

const SkincareComponent = () => {
  return (
      <center>
      <div className="App">
        <center>
          <center>
         
              <Card.Body>
                  <Card.Title><i><b>Skincare</b></i></Card.Title>
               
              </Card.Body>
              <div class="row mt-5">
              <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s1.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s2.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s3.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <br></br>
     
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s4.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s5.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="s6.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        </div>
       
        </center>
        </center>
      </div>
      </center>
  )
}



export default SkincareComponent;