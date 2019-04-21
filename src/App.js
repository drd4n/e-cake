import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import FromInput from './Components/FromInput'
import Summit from './Components/Summit'
import HeaderText from './Components/HeaderText';
import Footer from './Components/Footer'
import Cake from './Components/Cake'
// import Gifts from './Components/Gifts'

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderText />
      <Cake />
      <Gifts />
      <div align="right">
      <fieldset>
      <FromInput />
      
      <Summit />
      
      </fieldset>
      </div>
      <Footer />
      <Header />
      

        </div>
    );
  }
}

export default App;
