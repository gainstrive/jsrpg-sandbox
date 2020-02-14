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
            </div>
        )
    }
}

export default Game;