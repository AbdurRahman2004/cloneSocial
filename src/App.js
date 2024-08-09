
import './App.css';
import {  Routes, Route } from "react-router-dom";
import About from './component/about';
import Home from './component/home';
import Post from './component/post';
import CreatePost from './component/createpost';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';

function App() {
  return (
    <div className="App">
       <NavBar />

      <Routes>
        <Route path='home' element={<Home />} ></Route>
        <Route path='post' element={<Post />} ></Route>
        <Route path='about' element={<About />} ></Route>

        <Route path='createpost' element={<CreatePost />} ></Route>
      </Routes>
     

      </div>

      )}

export default App;
