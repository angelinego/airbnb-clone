import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Flat from "./components/flat";

class App extends Component {
  render() {
    const flat = {
      name: "Trendy Apt in Buttes Montmartre",
      imageUrl:
        "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      price: 200,
      priceCurrency: "EUR",
      lat: 48.885707,
      lng: 2.343543
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search" />
          <div className="flats" />
          <Flat flat={flat} />
          <Flat flat={flat} />
          <Flat flat={flat} />
        </div>
        <div className="map" />
      </div>
    );
  }
}

export default App;
