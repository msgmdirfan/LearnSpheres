import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigate from './component/navigation';
import Home from './component/Home'; 
import About from './component/About';
import Course from './component/Courses';
import Login from './component/Login';
import Mangodb from './component/Mangodb';
import Signup from './component/Signup';
import Enrolls from './component/Enrolls';
import Copyright from './component/Copyright';
import VideoPlayer from './component/VideoPlayer';
import Adminpage from '../Adminpage';
import Quiz from './component/Quiz';




function App() {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eachcourse/:id" element={<Mangodb />} />
        <Route path="/detail/:id" element={<Enrolls />} />    
        <Route path="/register" element={<Signup />} />    
        <Route path="/video/:url" element={<VideoPlayer />} />    
        <Route path="/admin" element={<Adminpage />} />    
        <Route path="/quiz" element={<Quiz />} />

      </Routes>

      <Copyright />

    </Router>
  );
}

export default App;







  



