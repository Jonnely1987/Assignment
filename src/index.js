import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import Post from './components/Post';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
  <Route path="/" element={<App />}/>
  <Route path="/create" element={<Create />}/>
  <Route path="/post" element={<Post />}/>
  </Routes>
  </Router>
);
reportWebVitals();




