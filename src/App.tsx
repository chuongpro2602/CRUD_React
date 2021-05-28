import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddBook from './components/Project/AddBook';
import { Provider } from "react-redux";
import store from "./store";
import UpdateBook from "./components/Project/UpdateBook";

function App() {
  return (

    <Provider store={store}>

      <Router>
        <div className="App">
          <Header />
          <Route exact path="/updateBook/:id" component={UpdateBook} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addBook" component={AddBook} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
