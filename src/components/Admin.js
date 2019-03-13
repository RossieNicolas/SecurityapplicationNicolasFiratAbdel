import React, {Component} from 'react';

export default class Admin extends Component{
    message = "Something went wrong";
    message = localStorage.getItem("message");
    render(){
        return(
            <div className="bg-light">
                <h2>You are an admin</h2>
                <p>{this.message}</p>
                <p>Go back</p>
                <a className="btn btn-outline-primary" href="/contact">Click here</a>
            </div>
        )
    }

}