import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchKey } from '../App/Modules/Search/search.slice';
import Button from 'react-bootstrap/Button';
import { checkIsLoggedIn } from '../helpers/auth';
import Dropdown from 'react-bootstrap/Dropdown';
import SettingsIcon from '@mui/icons-material/Settings';

function Navb() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search_key = useSelector((state) => state.search.search_key)

  const handleSearchChange = (event) => {
    dispatch(setSearchKey({ "search_key": event.target.value}))
    // console.log("search", search_key)
  };

  const isLoggedIn = checkIsLoggedIn();


  return (
    
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {/* Display Physical link only when user is logged in */}
            {isLoggedIn && <Nav.Link href="/physical">Physical</Nav.Link>}
            <Nav.Link href="#link">Video Page</Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* The Dropdown button */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='rounded-circle'>
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!isLoggedIn ? (
                <Dropdown.Item href="/inf">Login</Dropdown.Item>
              ) : (
                
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}


export default Navb;