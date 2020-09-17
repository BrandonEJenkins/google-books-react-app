import React, {Component} from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header/header.component.jsx';
import Books from './components/Books/books.component.jsx';

class App extends Component {
  render () {
    return (
      <Container>

        <div className="App">
          <Header />
          <Books />
        </div>

      </Container>
    )
  }
};

export default App;
