import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Main from './views/Main'
import NewPet from './views/NewPet'
import Details from './views/Detail'
import Edit from './views/Edit'
function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <NewPet path="/pets/new/" />
        <Details path="/pets/:id" />
        <Edit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
