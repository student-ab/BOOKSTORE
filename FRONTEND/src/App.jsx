
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './COURSES/Courses';
import Home from './HOME/Home';
import Signup from './comp/Signup';


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
   </>
  )
}

export default App
