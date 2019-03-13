import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import Contact from "./components/Contact";
import NotFound from  "./components/NotFound";
import Callback from "./components/Callback";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
        case "/":
          mainComponent = <Main{...this.props}/>;
          break;
        case "/contact":
          mainComponent = this.props.auth.isAuthenticated() ? <Contact{...this.props}/> : <NotFound/>;
          break;
        case "/callback":
          mainComponent = <Callback/>;
          break;
        case "/admin":
            mainComponent = <Admin/>;
            break;
        default:
          mainComponent = <NotFound/>;
          break;


    }
    return (
      <div className="App">
          {mainComponent}
      </div>
    );
  }
}

export default App;
