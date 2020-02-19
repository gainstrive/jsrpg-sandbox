import React, { Component } from 'react';
// ===============================================
// =============== COMPONENETS ===================
// ===============================================
import Hellbat from "../../../../ascii/hellbat/Hellbat";
import Floor from "../../../../scenery/floor/Floor";
import LeftWall from "../../../../scenery/leftWall/LeftWall";
import RightWall from "../../../../scenery/rightWall/RightWall";
import ProfileIcon from "../../../../UI/profileIcon/ProfileIcon";
// ===============================================
// =============== GAME LOGIC  ===================
// ===============================================
import game from "../../../../../logic/game/game";
// ===============================================
// =============== SOUND FILES ===================
// ===============================================
import buttonHoverSound from "../../../../../assets/audio/buttonHover.wav";
// ===============================================
// =============== CSS STYLING ===================
// ===============================================
import "./Start.css";
class Start extends Component {
    state = {
        startS3DisplayMessage: "",
        displayName: "GUEST",
    };
    componentDidMount() {
        document.getElementById("profileIconDiv").addEventListener("mouseover", () => {
            this.handleMouseOver("profileIcon", "button", "popupShow", "startS3DisplayMessageDiv");
        });
        document.getElementById("profileIconDiv").addEventListener("mouseleave", () => {
            this.handleMouseLeave("profileIcon", "button", "popupHide", "startS3DisplayMessageDiv");
        });
    }
    handleMouseOver = (elem, type, action, target) => {
        if (type === "button") {
            game.playSound.sfx(buttonHoverSound);
        }
        if (action === "popupShow") {
            document.getElementById(target).classList.remove("fadeOut");
            document.getElementById(target).classList.add("fadeIn");
        }
        switch (elem) {
            case "continue":
                this.setState({
                    startS3DisplayMessage: `Continue where you left off from the last time you played! While you're
                    signed in on your account, JSRPG will keep track of your progress. Choosing continue
                    will return you to the room you were at when you logged off.`
                })
                break;
            case "createCharacter":
                this.setState({
                    startS3DisplayMessage: `*WARNING* This will override your saved progress (if it exists)
                     once you finish character customization. Choose this if you wish to start the game
                     from scratch or delete your existing save. Deleting a character is permanent and
                     cannot be undone. 
                    `
                })
                break;
            case "options":
                this.setState({
                    startS3DisplayMessage: `View/change various in-game options like sound volume, game difficulty and
                    more. If you are signed in, these options will also be saved for the next time you
                    return to JSRPG. NOTE: Changing difficulty options count as using cheats which will disabled leaderboards
                    for your current game.
                    `
                })
                break;
            case "back":
                this.setState({
                    startS3DisplayMessage: `Clicking the back arrow will return you to the login/signup screen. Remember...
                    JSRPG can only save your data while you are logged in. By creating a free account, you'll be able to
                    resume your game at any time from where you left off.
                    `
                })
                break
            case "profileIcon":
                this.setState({
                    startS3DisplayMessage: `This is a placeholder for your player icon! When you're logged in, clicking
                    on this icon will allow you to view your account and change your profile icon. If you're not signed in, 
                    the profile icon will show the placeholder. This feature is currently in development.
                    `
                })
                break
            default:
                break;
        }
    };
    handleMouseLeave = (elem, type, action, target) => {
        if (action === "popupHide") {
            document.getElementById(target).classList.remove("fadeIn");
            document.getElementById(target).classList.add("fadeOut");
            this.setState({
                startS3displayMessage: "",
            });
        }
    }
    handleScreenChange = (nextScreen) => {
        switch (nextScreen) {
            case "characterCreate":
                const gameScreen = window.parent.document.getElementById("gameScreen");
                gameScreen.setAttribute("src", "/game/screens/createChar");
                break;
            default:
                break;
        }
    };
    handleScreenFadeOut = (screenOut, screenIn) => {
        setTimeout(() => {
            switch (screenOut) {
                case "startS1Wrapper":
                    console.log(`handleFadeOut(${screenOut}, ${screenIn}) Called...`);
                    document.getElementById(screenOut).classList.add("fadeOut");
                    this.handleScreenFadeIn(screenOut, screenIn);
                    break;
                case "startS3Wrapper":
                    console.log(`handleFadeOut(${screenOut}, ${screenIn}) Called...`);
                    document.getElementById(screenOut).classList.remove("fadeIn");
                    document.getElementById(screenOut).classList.add("fadeOut");
                    setTimeout(() => {
                        this.handleScreenChange("characterCreate");
                    }, 1500);
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
    };
    handleBackButton = (currentScreen) => {
        if (currentScreen === "startS3Wrapper") {
            let elem1 = document.getElementById(currentScreen);
            elem1.classList.remove("fadeIn");
            elem1.classList.add("fadeOut");
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }
    handleKeyUp = (event) => {
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
                        <Hellbat static="true" />
                    </div>
                    <div id="startS1FormDiv" className="container text-center">
                        <div className="row">
                            <div className="col">
                                <p id="startS1FormMessage">LOGIN TO JSRPG:</p>
                            </div>
                            <div className="col">
                                <button id="startS1FormHelp" className="btn btn-success" type="button"
                                onMouseOver={() => this.handleMouseOver("startS1FormHelp", "button", "n/a", "n/a")}
                                >?</button>
                            </div>
                        </div>
                        <input id="startS1Email" placeholder="ENTER YOUR EMAIL" className="form-control" type="text" name="" 
                        onKeyUp={(e) => this.handleKeyUp(document.onkeydown = (e))}/>
                        <input id="startS1Password" placeholder="ENTER YOUR PASSWORD" className="form-control" type="text" name="" />
                        <div className="row">
                            <div className="col">
                                <button id="startS1Login" className="btn btn-success" type="button"
                                onMouseOver={() => this.handleMouseOver("startS1Login", "button", "n/a", "n/a")}
                                >LOGIN</button>
                            </div>
                            <div className="col">
                                <input id="startS1PasswordToggle" className="form-check-input" type="checkbox" name="" value="true" />
                                <label id="startS1ToggleLabel" htmlFor="startS1PasswordToggle" className="form-check-label">SHOW/HIDE PASSWORD!</label>
                            </div>
                        </div>
                        <div className="col">
                            <button id="startS1SignUp" className="btn btn-success" type="button"
                            onMouseOver={() => this.handleMouseOver("startS1SignUp", "button", "n/a", "n/a")}
                            >SIGN-UP NOW FOR FREE!</button>
                        </div>
                    </div>
                    <div>
                        <h2 id="startS1GuestText">- OR -</h2>
                        <button id="startS1Guest" onClick={() => this.handleScreenFadeOut("startS1Wrapper", "startS3Wrapper")}
                            onMouseOver={() => this.handleMouseOver("startS1Guest", "button", "n/a", "n/a")}
                            className="btn btn-success" type="button">PLAY AS GUEST (LOCAL SAVES ONLY)</button>
                    </div>
                </div>

                <div id="startS3Wrapper">
                    <div id="startS3HeaderDiv">
                        <h1 id="startS3Header">JAVASCRIPT-RPG</h1>
                        <h2 id="startS3SubHeader">A ROUGELITE DUNGEON CRAWLER</h2>
                    </div>
                    <div id="startS3Scenery">
                        <Floor />
                        <LeftWall />
                        <RightWall />
                    </div>
                    <div id="startS3ButtonDiv">
                        <div className="col">
                            <button id="startS3Continue" onMouseOver={() => this.handleMouseOver("continue", "button", "popupShow", "startS3DisplayMessageDiv")} 
                            onMouseLeave={() => this.handleMouseLeave("continue", "button", "popupHide","startS3DisplayMessageDiv")} 
                            className="btn btn-success" type="button">CONTINUE ADVENTURE</button>
                        </div>
                        <div className="col">
                            <button id="startS3CreateCharacter" onMouseOver={() => this.handleMouseOver("createCharacter", "button", "popupShow", "startS3DisplayMessageDiv")}
                            onMouseLeave={() => this.handleMouseLeave("createCharacter", "button", "popupHide", "startS3DisplayMessageDiv")}
                            onClick={() => this.handleScreenFadeOut("startS3Wrapper", "characterCreate")}
                            className="btn btn-success" type="button">CREATE NEW CHARACTER</button>
                        </div>
                    </div>
                    <div id="startS3OptionsDiv" className="container text-center">
                    <div className="row">
                            <div className="col float-left">
                                <button id="startS3Back" onMouseOver={() => this.handleMouseOver("back", "button", "popupShow","startS3DisplayMessageDiv")} 
                                onMouseLeave={() => this.handleMouseLeave("back", "button", "popupHide","startS3DisplayMessageDiv")} 
                                onClick={() => this.handleBackButton("startS3Wrapper")}
                                className="btn btn-success" type="button">BACK</button>
                            </div>
                            <div className="col float-right">
                                <button id="startS3Options" onMouseOver={() => this.handleMouseOver("options", "button", "popupShow","startS3DisplayMessageDiv")} 
                                onMouseLeave={() => this.handleMouseLeave("options", "button", "popupHide","startS3DisplayMessageDiv")} 
                                className="btn btn-success" type="button">OPTIONS</button>
                            </div>
                        </div>
                    </div>
                    <div id="startS3DisplayMessageDiv" className="container text-center">
                        <p id="startS3DisplayMessage">{this.state.startS3DisplayMessage}</p>
                    </div>
                        <ProfileIcon />
                        <span id="startS3DisplayName">Logged in as: <span>{this.state.displayName}</span></span>
                </div>

            </div>
        )

    }
}

export default Start;