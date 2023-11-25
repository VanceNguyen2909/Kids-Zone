import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home/Home';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  const [courses, setCourses] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try{
        const courseJson = await fetch('homecard.json')
        const courseData = await courseJson.json();


        
        setCourses(courseData);
        setFilterCourses(courseData);
        // console.log(22, courseData)
        
      }catch (error){
        console.log('error reading json')
      }
    };
    fetchData();
  }, []);

  



  return (
    <div className="App">
      
      <nav>
        <Link to="/" >Home</Link>

      </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <Home courses={filterCourses} />
          </div>
        } />
      </Routes>
      
    </div>
  );
}

export default App;
