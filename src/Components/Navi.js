import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

function Navi() {
  
  return <>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>MoviesAPP</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/movielist'>Movie List</Nav.Link>
          <Nav.Link as={NavLink} to='/addmovie'>Add Movie</Nav.Link>
          <Nav.Link as={NavLink} to='/colorgame'>Color Game</Nav.Link>          
          </Nav>
          
        </Container>
      </Navbar>
  </>
}
export default Navi;