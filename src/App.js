import React from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route path ='/about'>
          <About />
        </Route>
        <Route exact path ='/cocktail:id'>
          <SingleCocktail />
        </Route>
        <Route path ='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
