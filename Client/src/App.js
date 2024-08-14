
import './App.css';
import {  Routes, Route } from "react-router-dom";
import About from './component/about';
import Home from './component/Home';
import CreatePost from './component/createpost';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import Post from './component/post';
import Missing from './component/missing';
import Delete from './component/delete';
import Edit from './component/edit';
import { useState } from 'react';

function App() {

  const [searchItem,setSearchItem] = useState("");
  const [post,setPost] = useState([])
  return (
    <div className="App">
       <NavBar onchange={setSearchItem}/>

      <Routes>
        <Route path='/' element={<Home searchItem={searchItem} postset={setPost}/>} ></Route>
        <Route path='home' element={<Home searchItem={searchItem} postset={setPost}/>} ></Route>
        <Route path='about' element={<About />} ></Route>
        <Route path='createpost' element={<CreatePost />} ></Route>
        <Route path='delete/:id' element={<Delete />} ></Route>
        <Route path='edit/:id' element={<Edit />} ></Route>
        <Route path='post/:id' element={<Post   post={post}/>} ></Route>
        <Route path="*" element={<Missing />} />
      </Routes>
     

      </div>

      )}

export default App;
