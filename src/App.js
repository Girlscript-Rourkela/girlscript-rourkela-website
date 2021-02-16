import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact/contact';
import Events from './pages/events';
import Teams from './pages/team';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/events' component={Events} />
        <Route path = '/team' component= {Teams} />
      </Switch>
    </Router>
  );
}

export default App;
