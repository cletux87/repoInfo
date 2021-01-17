import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Commits from './scenes/Commits';
import Home from './scenes/Home';
import Project from './scenes/Project';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info'>
            <div>Route 1</div>
          </Route>
          <Route exact path='/commit' component={Commits} />
          <Route exact path='/project' component={Project} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;