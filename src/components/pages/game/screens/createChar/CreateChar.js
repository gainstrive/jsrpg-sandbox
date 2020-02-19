import React, { Component } from 'react';
import "./CreateChar.css";

class CreateChar extends Component {

    state = {
        rollsRemaining: 3,
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: ""
    }
    componentDidMount() {

    }
    handleBackButton = (currentScreen) => {

    }
    handleKeyUp = (event) => {

    }
    handleMouseLeave = (elem, type, action, target) => {

    }
    handleMouseOver = (elem, type, action, target) => {

    }
    handleRollStats = () => {
        if (this.state.rollsRemaining > 0) {
            const acceptStats = document.getElementsByClassName("acceptStats");
            console.log(acceptStats)
            acceptStats[0].style.display = "inline-block";
            acceptStats[0].classList.add("buttonGlow");
            let statsArr = [];
            let rollsLeft = parseInt(this.state.rollsRemaining);
            console.log(rollsLeft)
            for (let i = 0; i < 6; i++) {
                let statInt = Math.floor(Math.random() * (20 - 9 + 1)) + 9;
                statsArr.push(statInt);
            }
            this.setState({
                rollsRemaining: rollsLeft - 1,
                strength: statsArr[0],
                dexterity: statsArr[1],
                constitution: statsArr[2],
                intelligence: statsArr[3],
                wisdom: statsArr[4],
                charisma: statsArr[5],
            })
        }
        if (this.state.rollsRemaining === 1) {
            document.getElementById("rollStats").classList.add("disabled");
        }
        else {
            
        }
    }
    handleScreenChange = (nextScreen) => {

    }
    handleScreenFadeIn = (screenOut, screenIn) => {

    }
    handleScreenFadeOut = (screenOut, screenIn) => {

    }
    render() {
        return (
            <div id="createCharWrapper" className="container text-center">
                <div id="createCharS1Wrapper">
                    <h1 id="reRolls">REROLLS REMANINING:
                        <span id="rollsRemaining">&nbsp;{this.state.rollsRemaining}</span>
                    </h1>
                    <button id="rollStats" className="btn btn-success"
                        onClick={() => this.handleRollStats()} type="button">
                        CLICK TO RANDOMIZE STATS
                        </button>
                    <div id="statsDiv">
                        <h2 id="playerStr">STRENGTH: {this.state.strength}</h2>
                        <p id="strengthDescription">STR determines how much raw damage you deal to enemies.</p>
                        <h2 id="playerDex">DEXTERITY: {this.state.dexterity}</h2>
                        <p id="dexterityDescription">DEX determines your physical agility and reflexes.</p>
                        <h2 id="playerCon">CONSTITUTION: {this.state.constitution}</h2>
                        <p id="constitutionDescription">CON determines how much damage you can take.</p>
                        <h2 id="playerInt">INTELLIGENCE: {this.state.intelligence}</h2>
                        <p id="intelligenceDescription">INT determines your mental acuity.</p>
                        <h2 id="playerWis">WISDOM: {this.state.wisdom}</h2>
                        <p id="wisdomDescription">WIS determines your awareness and intuition.</p>
                        <h2 id="playerCha">CHARISMA: {this.state.charisma}</h2>
                        <p id="charismaDescription">CHA determines your ability to influence others.</p>
                        <button id="acceptStats" className="btn btn-success acceptStats" type="button">ACCEPT YOUR FATE!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateChar;