import React from 'react';
import {Router,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/pages/Home'
import CountriesPage from './components/pages/Countries'
import SingleCountryPage from './components/pages/SingleCountry'
import Header from './components/styled-components/layouts/Header'
import history from './history';



function App() {
  return (
    <Router history={history}>
    <Header />

    <Route exact path='/' component={HomePage}/>

<Route exact path='/countries' component={CountriesPage}/>

<Route exact path='/countries/:code' component={SingleCountryPage}/>


    </Router>
  );
}

export default App;
