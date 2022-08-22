import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NameList from './components/Pages/NameList/NameList'
import HeaderBar from './components/HeaderBar/HeaderBar'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import { Comment } from './components/Pages/Comment/Comment'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/namelist" element={<NameList />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
