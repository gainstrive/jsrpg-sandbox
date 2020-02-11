import React, { Component } from 'react';
import "./Main.css";
// import Skeleton from "../../enemies/skeleton/Skeleton";
import Navigation from "../../elements/navigation/Navigation";


class Main extends Component {

  state = {
    currentModel: 0
  };

  render() {
    return (
      <div className="mainWrapper">
        <Navigation/>
        <div id="mainBody" className="container text-center">
            <h1 id="headline">JSRPG SANDBOX</h1>
        </div>
      </div>
    )
  }

}

export default Main;
