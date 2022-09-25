import React from "react"
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from './components/login/login';
import Register from './components/register/register';
import Class from "./components/classes/class";
import Home from "./components/home/home";

function App() {
  return (
    <section className="App">
      <Router>
      <main>
        <Switch>
          <Route path ="/" exact>
            <Login/>
          </Route>
          <Route path ="/home" exact>
            <Home/>
          </Route>
          <Route path ="/class" exact>
            <Class/>
          </Route>
          <Route path ="/register" exact>
            <Register/>
          </Route>
        </Switch>
      </main>
      </Router>
    </section>
  );
}

export default App;
