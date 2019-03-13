import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Contact";

export default class Main extends Component{
    render(){
        return(
            <Router>
            <div className="bg-light">
            <p>
                Welcome to the {this.props.name}
            </p>
                <p>
                    Contact the admin <Link to="/contact" className="btn btn-outline-primary">Click here</Link>
                </p>
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button className="btn btn-outline-secondary" onClick={this.props.auth.login}>Login</button>
                </div>
                }
                <Route path="/contact" exact component={Contact} />
                </div>

            </Router>)
        }
}