import React, {Component} from 'react';
import Form from "./Form";
//import jwtDecode from "jwt-decode";
import APIform from "./APIform";
import APIResults from "./APIResults";

export default class Contact extends Component {

    render() {
        return (
            <div className="bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <h2 className="navbar-brand mx-auto">Welcome to the contact page</h2>
                    </nav>
                </div>
                <br/>
                <br/>
                <p>Do you want to contact the admin?</p>
                <div>
                    <Form/>
                </div>
                <hr/>
                <p>Use the api</p>
                    <APIform/>
                    <APIResults/>
                <hr/>
                <iframe title="random website als frame" src="https://theuselessweb.com" height="300" width="400" sandbox="allow-same-origin allow-scripts allow-popups">some random website</iframe>
                <hr/>
                <p>Go back to the home page <a href="/" className="btn btn-outline-primary">Click here</a></p>
                <button className="btn btn-outline-secondary" onClick={this.props.auth.logout}>Logout</button>
                <div className="card-footer text-muted mt-2">
                    Created by Abdel, Nicolas and Firat for AP.
                </div>
            </div>

        )
    }
    /*
    getName(){
        if(localStorage.getItem("Name")){
            let name = localStorage.getItem("Name");
            console.log(jwtDecode(localStorage.getItem("id_token")).given_name);
            let name = jwtDecode(localStorage.getItem("id_token")).given_name;
            if (name === undefined) {
                return "could not determine your name, please use Google to log in to the application";
            }else {
                return jwtDecode(localStorage.getItem("id_token")).given_name;
            }
            return name;
        } else{
            return "could not determine your name, please use Google to log in to the application";
        }
    }*/
}