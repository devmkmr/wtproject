import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
class login extends React.Component {
    render() {
      return(
          <div className="emailx">
              <input type="email">enter your email id</input>
              <input type="password">Password</input>

          </div>
      ) ;
    }
  }