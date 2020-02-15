import React, { Component } from 'react';
import "./Game.css"
import Navigation from '../../elements/navigation/Navigation';

class Game extends Component {
    state = {

    }
    componentDidMount() {
        setTimeout(() => {
            document.getElementById("gameScreen").classList.add("fadeIn");
        }, 500);
    }
    render() {
        return (
            <div id="gameWrapper" className="text-center">
                <Navigation/>
                <iframe title="Game Screen" id="gameScreen" src="/game/screens/start"></iframe>
                <button id="devConsoleButton" className="btn btn-success" type="button">&#x26A0;</button>
            </div>
        )
    }
}

export default Game;