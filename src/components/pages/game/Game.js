import React, { Component } from 'react';
import "./Game.css"
import Navigation from '../../elements/navigation/Navigation';

class Game extends Component {
    state = {

    }
    render() {
        return (
            <div id="gameWrapper" className="text-center">
                <Navigation/>
                <iframe title="Game Screen" id="gameScreen" src="/start"></iframe>
            </div>
        )
    }
}

export default Game;