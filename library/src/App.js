import React, { Component } from 'react';

import { 
  BrowserRouter,
  Route,
} from 'react-router-dom'

import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import BookAddForm from './components/BookAddForm'
import BookEditForm from './components/BookEdit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={BookList} />
          <Route path="/bookdetail/:id" component={BookDetail} />
          <Route path="/bookaddform" component={BookAddForm} />
          <Route path="/bookeditform" component={BookEditForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
