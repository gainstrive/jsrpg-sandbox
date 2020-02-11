import React, { Component } from 'react';
import "./Models.css"
import ModelViewer from "../../elements/modelViewer/ModelViewer";

class Models extends Component {

  state = {
    currentModel: 0,
    modelName: "SK3L3T0N"
  };

  modelNum = 0;

  renderNextModel = () => {
    this.modelNum++;
    if (this.modelNum >= 3) {
      this.modelNum = 3;
      document.getElementById("nextButton").classList.add("disabled");
    }
    else {
      document.getElementById("prevButton").classList.remove("disabled");
      document.getElementById("nextButton").classList.remove("disabled");
      this.setState({ currentModel: this.modelNum })
      this.renderModelName();
    }
  }

  renderPreviousModel = () => {
    this.modelNum--;
    if (this.modelNum <= 0) {
      this.modelNum = 0;
      document.getElementById("prevButton").classList.add("disabled");
    }
    else {
      document.getElementById("nextButton").classList.remove("disabled");
      document.getElementById("prevButton").classList.remove("disabled");
      this.setState({ currentModel: this.modelNum })
      this.renderModelName();
    }
    this.setState({ currentModel: this.modelNum })
    this.renderModelName();
  }

  renderModelName = () => {
    switch (this.modelNum) {
      case 0:
        this.setState({ modelName: "SK3L3T0N"});
        break;
      case 1:
        this.setState({ modelName: "H3LLB4T"});
        break;
      case 2:
        this.setState({ modelName: "PUMPK1NG"});
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="modelsWrapper" className="container text-center">
        <div id="modelViewerHeader">
          <h1 id="modelName">{this.state.modelName}</h1>
        </div>
        
        <br />

        <div id="modelViewerWrapper">
          <div id="model" className={"model model" + this.state.currentModel}>
            <ModelViewer currentModel={this.state.currentModel} />
          </div>
        </div>

        <div id="modelViewerButtons" className="container text-center">
          <div className="row">
            <div className="col">
              <button id="prevButton" className="diabled btn btn-success"
                type="button" onClick={() => this.renderPreviousModel()}>Prev.</button>
            </div>
            <div className="col">
              <button id="nextButton" className="btn btn-success"
                type="button" onClick={() => this.renderNextModel()}>Next</button>
            </div>
          </div>
        </div>

        <div id="modelViewerInfo" className="container text-center">
              
        </div>
      </div>
    )
  }

}

export default Models;
