import React, { Component } from 'react';
import "./Game.css"
import Navigation from '../../elements/navigation/Navigation';

class Game extends Component {
    state = {
        menuToggled: false
    }
    componentDidMount() {
        document.getElementById("toggler").addEventListener("click", () => {
            if (!document.getElementById("navbarNav").classList.contains("show") && this.state.menuToggled === false) {
                document.getElementById("gameScreen").style.top = "240px";
                this.setState({ menuToggled: true });
            }
            else {
                document.getElementById("gameScreen").style.top = "60px";
                this.setState({ menuToggled: false });
            }
        });
        document.addEventListener("keyup", (e) => {
            if (e.which === 192) {
                this.testPage("/game/screens/createChar")
            }
        })
        setTimeout(() => {
            document.getElementById("gameScreen").classList.add("fadeIn");
        }, 500);
    }
    testPage = (path) => {
        console.log(path);
        const gameScreen = window.parent.document.getElementById("gameScreen");
                gameScreen.setAttribute("src", path);
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