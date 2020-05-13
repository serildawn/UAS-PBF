import React, { Component } from "react";
import "./Home.css";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";
import Firebase from "../firebase/config";
import "firebase/database";
import Review from "../Review/Review"
import Makeup from "../component/Makeup";
import Skincare from "../component/Skincare";
import Fragrance from "../component/Fragrance";
import AboutComponent from "../component/AboutComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";


export default function Uas() {
    return (
      <Router>
      <div>
         <center>
          <h1 className="title">Female Daily</h1>
          <h5>Customer Service Email: hello@femaledaily.com</h5>
          </center>
 
          <ul className="header bg-danger">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/makeup">Makeup</NavLink></li>
            <li><NavLink to="/skincare">Skincare</NavLink></li>
            <li><NavLink to="/fragrance">Fragrance</NavLink></li>
            <li><NavLink to="/Review">Review</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route exact path="/Review" component={Review}/>
            <Route exact path="/About" component={AboutComponent}/>
            <Route exact path="/Makeup" component={Makeup}/>
            <Route exact path="/Skincare" component={Skincare}/>
            <Route exact path="/Fragrance" component={Fragrance}/>
          </div>
        </div>
      </Router>
    );
  }
  function Home() {
    return (
      <div className="col-12 mt-5" style={{ zIndex:"10", fontFamily: "Oswald, sans-serif" }}>
         <center>
        
        <img src="tl.png" alt="" />
        </center>
        <div class="row mt-5">
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
              <center>
                <img src="1.PNG" alt="ac" style={{ height: "125px" }} />
                <h3 class="card-title">SALE RAMADHAN</h3>
                </center>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
              <center>
                <img src="2.PNG" alt="" style={{ height: "125px" }} />
                <h3 class="card-title">TOP 100 BEST SELLER</h3>
              </center>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
              <center>
                <img src="3.PNG" alt="" style={{ height: "125px" }} />
                <h3 class="card-title">SET BUNDLE KITS</h3>
              </center>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
              <center>
                <img src="4.PNG" alt="" style={{ height: "125px" }} />
                <h3 class="card-title">SMART SEVVERS</h3>
              </center>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      <div className="sambutan">
        <center>
        <h2>Welcome to Sociolla</h2>
        <br></br>
       
        </center>
      </div>
      </div>
    );
  }

  