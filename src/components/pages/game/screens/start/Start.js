import React, { Component } from 'react';
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
            <div>
                
            </div>
        )

    }
}

export default Start;