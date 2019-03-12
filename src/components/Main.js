import React, {Component} from 'react';

export default class Main extends Component{
    render(){
        return(
            <div className="bg-light">
            <p>
                Welcome to the {this.props.name}
            </p>
                <p>
                    Contact the admin <a href="/contact" className="btn btn-outline-primary">Click here</a>
                </p>
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr/>
                    Please login first
                    <hr/>
                    <button className="btn btn-outline-secondary" onClick={this.props.auth.login}>Login</button>
                </div>
                }
        </div>)
        }
}