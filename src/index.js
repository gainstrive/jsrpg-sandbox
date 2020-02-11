import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import "./index.css";
import Main from "./components/pages/main/Main";
import Models from "./components/pages/models/Models";
import Game from "./components/pages/game/Game";
import Start from "./components/pages/game/screens/start/Start";

// ReactDOM.render(<Main />, document.getElementById('root'));
const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/models" component={Models} />
          <Route path="/game" component={Game} />
          <Route exact path="/start" component={Start} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))