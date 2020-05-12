import React, { Component } from "react";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import '../App.css';

const FragranceComponent = () => {
  return (
      <center>
      <div className="App">
        <center>
          <center>
         
              <Card.Body>
                  <Card.Title><i><b>Fragrance</b></i></Card.Title>
               
              </Card.Body>
              <div class="row mt-5">
              <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f1.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f2.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f3.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <br></br>
     
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f4.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f5.PNG" alt="" style={{ height: "275px" }} />
            </center>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
            <center>
              <img src="f6.PNG" alt="" style={{ height: "275px" }} />
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



export default FragranceComponent;