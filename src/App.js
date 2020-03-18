import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <Switch>
                <Route exact path="/" render={() => <Hero />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/contact" render={() => <Contact />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
