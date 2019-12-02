import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from './components/Search';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <Router>
      <Route path="/" component={Search} exact={true} />
      <Route path="/favourites" component={Favourites} />
    </Router>
  )
}

export default App