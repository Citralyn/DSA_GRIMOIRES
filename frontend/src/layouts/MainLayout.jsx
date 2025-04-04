import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
    <Navbar expand='false' className='nav_bar'>
      <Container>
        <Navbar.Brand className='text-light' href="/">The DSA Grimoires</Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="collapser"/>
        <Navbar.Collapse id="collapser">
          <Nav style={{float: "right"}}>
            <Nav.Link className='text-light ' href="/leetcode">Leetcode</Nav.Link>
            <Nav.Link className='text-light' href="/codeforces">Codeforces</Nav.Link>
            <Nav.Link className='text-light' href="/submit">Submit a Spell</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default MainLayout;