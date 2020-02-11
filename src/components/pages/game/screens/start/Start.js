import React, { Component } from 'react';
import Hellbat from "../../../../enemies/hellbat/Hellbat"
import "./Start.css";

class Start extends Component {
    state = {

    }
    nextScreen = () => {
        const gameScreen = window.parent.document.getElementById("gameScreen");
        gameScreen.setAttribute("src", "/login");
    };
    render() {
        
        return (

            <div id="startWrapper" className="container text-center">

                <div id="startS1">

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
                    </div>

                </div>


            </div>
        )

    }
}

export default Start;