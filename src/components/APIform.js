import React, {Component} from 'react';
import axios from 'axios';

export default class APIform extends Component {
    constructor(props) {
        super(props);
        this.state = {Name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //localStorage.setItem("Name", this.state.value);
        this.sendNameToAPI();
    }

    getOAuthToken() {
        let request = require("request");
        let finalResponse = 'Bearer ';
        let options = { method: 'POST',
            url: 'https://dev-h1jx91ic.eu.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body:
                { grant_type: 'client_credentials',
                    client_id: 'DQ2KDU2LUrlToeXBfMrLAjt26VmzrGzh',
                    client_secret: 'xk8WpRum-bx18NJF_dSpn_FT-LunBoHUNa5466AKT8d-fQXgxmbHJye6zgb9D9yA',
                    audience: 'https://dev-h1jx91ic.eu.auth0.com/api/v2/',
                    redirectUri:"https://musing-jang-1930f8.netlify.com/callback"},
            json: true };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            finalResponse += response;
        });
        return finalResponse;

    }
    sendNameToAPI = () => {
        let bearertoken = localStorage.getItem('access_token').toString();
            axios.post('http://localhost:3000/api/names', {

            name: this.state.value,
            access_token: localStorage.getItem('access_token')
        },{headers: {"Access-Control-Allow-Origin": "*",
                    authorization: 'Bearer ' + bearertoken,
                    'Content-Type': 'application/json'}})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="bg-light">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Fill in your name:
                            <input type="text" value={this.state.value} onChange={this.handleChange}
                                   className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-secondary" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}