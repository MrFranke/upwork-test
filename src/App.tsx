import React from 'react';
import './App.css';
import { Mainpage } from "./pages/Mainpage";
import { Container } from "react-bootstrap";
import { Navigation } from "./components/Navigation/Navigation";
import { Header } from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { addTask } from "./store/tasks";

function App() {
  return (
    <Router>
      <div className={'App'}>
        <Navigation />
        <div className={'Page'}>
          <Container fluid={true}>
            <div className={'Header'}>
              <Header />
            </div>
            <Switch>
              <Route path="/search"><h1>Search</h1></Route>
              <Route path="/profile"><h1>Profile</h1></Route>
              <Route path="/settings"><h1>Settings</h1></Route>
              <Route path="/notifications"><h1>Notifications</h1></Route>
              <Route path="/">
                <Mainpage />
              </Route>
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;


// ADD TEST DATA
new Array(6).fill({
  title: 'Priniciap Examiner (FFFF)',
  completed: 122,
  remaining: 22,
  progress: 65,
  date: new Date()
}).forEach(addTask)

new Array(3).fill({
  title: 'Priniciap Examiner (FFFF)',
  completed: 144,
  remaining: 0,
  progress: 100,
  date: new Date()
}).forEach(addTask)
