import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
// import MainRouter from './router/MainRouter'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorUrl from './pages/ErrorUrl'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rooms' component={Rooms} />
        <Route path='/detail/room/:slug' component={SingleRoom} />
        <Route component={ErrorUrl} />
      </Switch>
    </>
  );
}

export default App;
