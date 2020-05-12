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


class Home extends Component {
  
  render() {
    return (
      <div>
        <div className="notesHeader">
          <div>FEMALE DAILY</div>
        </div>
        <Router>
        <div>
        <center>
          <h5>hello@femaledaily.com</h5>
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
            <Route exact path="/Review" component={Review}/>
            <Route exact path="/About" component={AboutComponent}/>
            <Route exact path="/Makeup" component={Makeup}/>
            <Route exact path="/Skincare" component={Skincare}/>
            <Route exact path="/Fragrance" component={Fragrance}/>
          </div>
        </div>
      </Router>
      <div className="col-12 mt-5" style={{ zIndex:"10", fontFamily: "Oswald, sans-serif" }}>
             <center>
            
            <img src="tl.png" alt="" />
            </center>
            <div class="row mt-5">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <center>
                    <img src="1.PNG" alt="ac" style={{ height: "150px" }} />
                      <br></br>
                    <h3 class="card-title">MAKEUP</h3>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <center>
                    <img src="2.PNG" alt="" style={{ height: "150px" }} />
                    <h3 class="card-title">SKIN CARE</h3>
                  </center>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                  <center>
                    <img src="3.PNG" alt="" style={{ height: "150px" }} />
                    <h3 class="card-title">FRAGRANCE</h3>
                  </center>
                  </div>
                </div>
              </div>
              
             
            </div>
            <br></br>
            <img src="tl2.png" alt="" />
            <br></br>
          <div className="sambutan">
            
          </div>
          </div>
         <br></br>
        
       
        <br></br>
        <br></br>
        <div className="sambutan">
        <center>
            <h2>Find everything you want to know about beauty on Female Daily</h2>
            <br></br>
           
            </center>
            </div>
        </div>
    );
  }
}

export default Home;
