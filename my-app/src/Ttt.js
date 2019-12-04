import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Ttt() {
  return (
    <React.Fragment>
<div className="tit">
            <div className="tit-header">
                <Router>
                  <div>
                    <nav>
                      <ul>

                        <li>
                          <Link to="/users"><h1>安装与过程</h1></Link>
                        </li>
                      </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>

                      <Route path="/users">
                        <Users />
                      </Route>

                      
                    </Switch>
                  </div>
                </Router>
                </div>
                </div>
                </React.Fragment>           
  );
}



function Users() {
  return <h2>Users</h2>;
}