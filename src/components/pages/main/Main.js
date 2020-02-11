import React, { Component } from 'react';
import "./Main.css";
// import Skeleton from "../../enemies/skeleton/Skeleton";
import Models from "../models/Models";


class Main extends Component {

  state = {
    currentModel: 0
  };

  render() {
    return (
      <div className="mainWrapper container text-center">
        <h1 id="headline">JSRPG SANDBOX</h1>
        <Models/>
      </div>
    )
  }

}

export default Main;
