import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Upload from './component/Upload/Upload';
import Uploaded from './component/Uploaded/Uploaded';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/uploaded" element={<Uploaded />} />
    </Routes>
  </Router>
);

export default App;


