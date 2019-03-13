import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Contact";

export default class Admin extends Component{
    message = "Something went wrong";
    message = localStorage.getItem("message");
    render(){
        return(
            <Router>
            <div className="bg-light">
                <h2>You are an admin</h2>
                <p>{this.message}</p>
                <p>Go back</p>
                <Link className="btn btn-outline-primary" to="/contact">Click here</Link>
                <Route path="/contact" exact component={Contact} />
            </div>
            </Router>
        )
    }

}