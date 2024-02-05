import logo from './logo.svg';
import './App.css';
import * as React from "react";
import axios from 'axios';

import {
  createBrowserRouter,
  Route,
  BrowserRouter,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PostList from './components/PostList';
import Home from './components/Home';
import About from './components/About';
import PostDetail from './components/PostDetail';
import Page404 from './components/Page404';
import MyForm from './components/Form';



function App() {
  return (
    
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<PostList/>}></Route>
        <Route path='/postdetail' element={<PostDetail/>}></Route>
        <Route path='/PostList' element={<PostList/>}></Route>
        <Route path='/*' element={<Page404/>}></Route>


        {/* <Route path='/about' element={<About/>}></Route> */}

      </Routes>
  </BrowserRouter>

    
  );
}

export default App;
