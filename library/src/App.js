import React, { Component } from 'react';

import { 
  BrowserRouter,
  Route,
} from 'react-router-dom'

import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={BookList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
