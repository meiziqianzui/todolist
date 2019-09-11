import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './Component/Home';
import DoneList from './Component/DoneList';
import TodoList from './Component/TodoList';

function App() {
  return (
    <Router>
      <Route  exact path = "/" component = { Home }/>
      <Route  path = "/todolist" component = { TodoList }/>
      <Route  path = "/donelist" component = { DoneList }/>
    </Router>
  );
}

export default App;
