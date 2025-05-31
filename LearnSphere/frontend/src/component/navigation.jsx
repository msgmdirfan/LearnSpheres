import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    const storedUsername = localStorage.getItem("name");

    setIsLoggedIn(!!token);
    setIsAdmin(adminStatus);
    setUsername(storedUsername || "");
  }, []); // Empty dependency array to run only on mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-white shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-primary'>
          <img src="/logo.png" alt="logo" style={{ height: "40px" }} />
          LearnSphere
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center align-items-center">
            <Nav.Link as={Link} to="/home" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Home</Nav.Link>
            <Nav.Link as={Link} to="/course" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>About</Nav.Link>
            
            {isLoggedIn && isAdmin && (
              <Nav.Link as={Link} to="/admin" className='fs-5 text-primary mx-2 fw-semibold nav-hover'>Admin</Nav.Link>
            )}

            {isLoggedIn ? (
              <>{!isAdmin && isLoggedIn &&(
                <span className="fs-5 text-success fw-bold mx-3">👤 {username}</span>)}
                <button onClick={handleLogout} className='btn btn-danger px-4 mx-2 fw-bold'>Logout</button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className='fs-5 text-primary px-4 mx-2 fw-bold'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;