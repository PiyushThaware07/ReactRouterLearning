import React from 'react';
// Components
import Home from './pages/Home';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import GrandParent from './components/GrandParent';
import UseReducerHook from './components/UseReducerHook';

import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Posts from './pages/Posts';
import Post from './pages/Post';

export default function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>


    </div>
  )
}
