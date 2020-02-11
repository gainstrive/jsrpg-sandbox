import React, { Component } from 'react';
import Hellbat from "../../../../enemies/hellbat/Hellbat"
import "./Start.css";

class Start extends Component {
    state = {

    }
    handleScreenChange = () => {
        const gameScreen = window.parent.document.getElementById("gameScreen");
        gameScreen.setAttribute("src", "/login");
    };
    handleScreenFadeOut = (screenOut, screenIn) => {
        setTimeout(() => {
            switch (screenOut) {
                case "startS1Wrapper":
                    console.log(`handleFadeOut(${screenOut}, ${screenIn}) Called...`);
                    document.getElementById(screenOut).classList.add("fadeOut");
                    this.handleScreenFadeIn(screenOut, screenIn);
                    break;
                default:
                    break;
            }
        }, 500);
    }
    handleScreenFadeIn = (screenOut, screenIn) => {
        console.log(`handleFadeIn("${screenIn}") Called...`);
        setTimeout(() => {
            switch (screenIn) {
                case "startS3Wrapper":
                    document.getElementById(screenOut).style.display = "none";
                    document.getElementById(screenIn).classList.add("fadeIn");
                    break;
                default:
                    break;
            }
        }, 1500);
    }
    render() {
        
        return (

            <div id="startWrapper" className="container text-center">

                <div id="startS1Wrapper">
                    <div id="startS1HeaderDiv">
                        <h1 id="startS1Header">JAVASCRIPT-RPG</h1>
                        <h2 id="startS1SubHeader">A ROUGELITE DUNGEON CRAWLER</h2>
                    </div>
                    <div id="startS1EnemyDiv">
                        <Hellbat/>
                    </div>
                    <div id="startS1FormDiv" className="container text-center">
                        <div className="row">
                            <div className="col">
                                <p id="startS1FormMessage">LOGIN TO JSRPG:</p>
                            </div>
                            <div className="col">
                                <button id="startS1FormHelp" className="btn btn-success" type="button">?</button>
                            </div>
                        </div>
                            <input id="startS1Email" placeholder="ENTER YOUR EMAIL" className="form-control" type="text" name="" />
                            <input id="startS1Password" placeholder="ENTER YOUR PASSWORD" className="form-control" type="text" name="" />
                        <div className="row">
                            <div className="col">
                                <button id="startS1Login" className="btn btn-success" type="button">LOGIN</button>
                            </div>
                            <div className="col">
                                    <input id="startS1PasswordToggle" className="form-check-input" type="checkbox" name="" value="true" />
                                    <label id="startS1ToggleLabel" htmlFor="startS1PasswordToggle" className="form-check-label">SHOW/HIDE PASSWORD!</label>
                            </div>
                        </div>
                        <div className="col">
                                <button id="startS1SignUp" className="btn btn-success" type="button">SIGN-UP NOW FOR FREE!</button>
                        </div>
                    </div>
                    <div>
                        <h2 id="startS1GuestText">- OR -</h2>
                        <button id="startS1Guest" onClick={() => this.handleScreenFadeOut("startS1Wrapper", "startS3Wrapper")} 
                        className="btn btn-success" type="button">PLAY AS GUEST (LOCAL SAVES ONLY)</button>
                    </div>
                </div>

                <div id="startS3Wrapper">
                    <h1>Test</h1>
                </div>

            </div>
        )

    }
}

export default Start;