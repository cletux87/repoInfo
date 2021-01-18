import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Commits from './scenes/Commits';
import Home from './scenes/Home';
import Project from './scenes/Project';
import NotFound from './scenes/NotFound';
import UnderConstruction from './scenes/UnderConstruction';
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
          <Route exact path='/info' component={UnderConstruction} />
          <Route exact path='/commit' component={Commits} />
          <Route exact path='/project' component={Project} />
          <Route path='' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
