import React from "react";
import { Route, HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </HashRouter>
    </>
  );
}

export default App;
