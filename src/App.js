import React, { Component } from 'react';
import logo from './logo.svg';
import Body from './Body';
import './App.css';


/**
 * Body 
 * Not: *Önce constructor ardından render çalışır.*
 */
class App extends Component {
  constructor() {
    super();

    // Uygulama içinde değişebilir veriler. ALt componentlere prob olarak aktarılır. (Örneğin: Body)
    this.state = {
      name: 'Sümeyya'
    };
  }

  render() {
    // Css classları 'className' şeklinde tanımlanıyor
    // return div'siz olmaz
    // Div'ler içinde yazılması daha sağlıklıdır.
    return (
      <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo"/>
       </header>
      
       <div>
         <Body teacherName={this.state.name}/>
       </div>
      </div>
    );
  }
}

export default App;
