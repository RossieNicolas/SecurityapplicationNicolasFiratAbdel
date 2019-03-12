import React, {Component} from 'react';
import axios from 'axios';

export default class APIResults extends Component{
    constructor(props){
        super(props);
        this.state = {name: []};
    }
    componentDidMount = () => {
        axios.get('http://localhost:3000/api/names').then((res) => {
            for (var i = 0; i < res.data.length; i++) {
                if (localStorage.getItem("access_token") === res.data[i].access_token) {
                    this.setState({
                        name: [...this.state.name, res.data[i].name]
                    });
                }
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    render(){
        return(
            <div>
                <button onClick={this.componentDidMount} className="btn btn-outline-secondary">Result</button>
                <br/>
                <br/>
                <h4>{this.state.name[0]}</h4>
            </div>
        );
    }
}