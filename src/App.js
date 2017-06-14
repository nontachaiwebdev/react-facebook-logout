import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount () {
    const { loadFacebookSDK, initFacebookApp } = this
    loadFacebookSDK()
    initFacebookApp()
  }
  loadFacebookSDK = () => {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }
  initFacebookApp = () => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '458022411244141',
        cookie     : true,  // enable cookies to allow the server to access 
				// the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });

      window.FB.getLoginStatus(function(response) {
        console.log(response)
      });
    };

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
