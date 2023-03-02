import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundries from "./components/ErrorBoundries";
import Header from "./components/Header";
import Home from "./components/home";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Dashboard from "./components/poc/Dashboard";
import HomeTemplate from "./components/poc/HeaderTemplate";
import NewPost from "./components/poc/NewPost";
import PocHeader from "./components/poc/PocHeader";
import Recentpost from "./components/poc/Recentpost";


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
          <Route path="/poc" element={<PocHeader />} />
          <Route path="/poc" element={<HomeTemplate />}>
            <Route index element={<Dashboard />} />
            <Route path="/poc/home" element={<Dashboard />} />
            <Route path="/poc/newpost" element={<NewPost />} />
            <Route path="/poc/recentpost" element={<Recentpost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
