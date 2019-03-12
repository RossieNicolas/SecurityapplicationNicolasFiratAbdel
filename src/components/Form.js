import React,{Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {Message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Message submitted to the admin: ' + this.state.value);
        event.preventDefault();
        localStorage.setItem("message", this.state.value);
    }

    render() {
        return (
            <div className="bg-light">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Message:
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
                        </label>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" className="btn btn-outline-secondary" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}