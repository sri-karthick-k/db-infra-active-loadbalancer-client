import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Dashboard from './Dashboard.jsx';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/load-balancer" element={<App />}/>
      </Routes>
    </Router>
)