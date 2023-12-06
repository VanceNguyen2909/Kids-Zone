import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Navb from './NavBar/NavBar';
import AuthForm from './User/test';


import 'bootstrap/dist/css/bootstrap.min.css';
import Physical from './Physical/Physical';
import Footer from './Footer/Footer';
import LoginSignUp from './Login/LoginSignUp';
import Logout from './Logout/Logout';
import Profile from './profile';
import BlogPost from './Physical/BlogPost';
// import Footer from './Footer/Footer';
import AboutUs from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';

function App() {


  // get data from homecard.json
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  // get data from courses.json
  const [courses, setCourses] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        // get data from homecard.json
        const cardJson = await fetch('homecard.json');
        const cardData = await cardJson.json();
        setCards(cardData);
        setFilterCards(cardData);
        // console.log(22, courseData)
        
        // get data from courses.json
        const courseJson = await fetch('courses.json');
        const courseData = await courseJson.json();
        setCourses(courseData);
        setFilterCourses(courseData);

        



      } catch (error) {
        console.log('error reading json')
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">

      <nav>
        {/* <Link to="/" >Home</Link>
        <Link to="/physicalpage" >Physical Page</Link>
        <Link to="/videopage" >Video Page</Link>
        <Link to="/eventpage" >Event Page</Link>
        <Link to="/gallery" >Gallery</Link> */}
        <Navb /> 
      </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <Home cards={filterCards} />
          </div>
        } />
        <Route path='/physical' element={
          <div>
            <Physical courses={filterCourses} />
          </div>
        } />
        <Route path="/physical/:id" element={<BlogPost />} />
        <Route path='/inf' element={
          <div>
            <LoginSignUp/>
          </div>
        }/>
        <Route path='/profile' element={
          <div>
            <Profile/>
          </div>
        }/>
        <Route path='/logout' element={
          <div>
            <Logout/>
          </div>
        }/>
        <Route path='/About' element={
          <div>
            <AboutUs/>
          </div>
        } />
        <Route path='/Contact' element={
          <div>
            <Contact/>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
