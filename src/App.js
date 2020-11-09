import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Header, Resume } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App;
