import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };

  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }

}

export default App;
