import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./components/pages/main/Main";
import Models from "./components/pages/models/Models";
import Game from "./components/pages/game/Game";
import Start from "./components/pages/game/screens/start/Start";

// ReactDOM.render(<Main />, document.getElementById('root'));
const routing = (
    <Router>
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/models" component={Models} />
          {/* GAME ROUTES */}
          <Route exact path="/game" component={Game} />
          <Route exact path="/game/screens/start" component={Start} />
        </Switch>
        </BrowserRouter>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))