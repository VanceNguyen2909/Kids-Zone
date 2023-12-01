import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchKey } from '../App/Modules/Search/search.slice';


function Navb() {
  const location = useLocation();
  const dispatch = useDispatch();
  const search_key = useSelector((state) => state.search.search_key)

  const handleSearchChange = (event) => {
    dispatch(setSearchKey({ "search_key": event.target.value}))
    // console.log("search", search_key)
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top  "  >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center align-items-center" >
          <Nav className=" me-auto my-lg-0   ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/physical">Physical</Nav.Link>
            <Nav.Link href="#link">Video Page</Nav.Link>
            {/* <Nav.Link href="#link">Event Page</Nav.Link> */}
            {/* <Nav.Link href="#link">Gallery</Nav.Link> */}
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
            {location.pathname === '/physical' && (
              <div className="flex justify-center mb-8 " style={{ paddingLeft: '10px' }}>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[400px] rounded-pill "
                  onChange={handleSearchChange}
                  value={search_key}
                />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;