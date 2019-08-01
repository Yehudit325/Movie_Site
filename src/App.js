import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Favorites from './components/pages/Favorites';
import MovieDetails from './components/pages/MovieDetails';
import MovieIndex from './components/pages/MovieIndex';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={MovieIndex} />
        <Route path='/details' component={MovieDetails} />
        <Route path='/favorites' component={Favorites} />
      </BrowserRouter>

      
        
    </div>
  );
}

export default App;
