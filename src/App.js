import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundries from "./components/ErrorBoundries";
import Header from "./components/Header";
import Home from "./components/home";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route
            path="/page2"
            element={
              <ErrorBoundries>
                <Page2 />
              </ErrorBoundries>
            }
          />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="page1">Page 1</Link>
            </li>
            <li>
              <Link to="page2">Page 2</Link>
            </li>
            <li>
              <Link to="page3">Page 3</Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default App;
