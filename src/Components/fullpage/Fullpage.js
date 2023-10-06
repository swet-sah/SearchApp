
import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'; // Added Outlet
import Article from './Article';
import Highlights from './Highlights';
import TopicKeywordComponent from './TopicKeywordComponent';
import { FaHome, FaStar, FaBook } from 'react-icons/fa';  // Importing the icons
import '../Style.css';

const Fullpage = () => {
  return (

    <div>
      {/* Container for the navigation */}
      <Container style={{ padding: '10px' }}>
        <Nav variant="underline" defaultActiveKey="/article" >
          <Nav.Item className='px-3'>
            <Nav.Link as={Link} to="article" className='text-dark d-flex align-items-center '>
              <FaHome className='mx-1' /> FullArticle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='px-3'>
            <Nav.Link as={Link} to="highlights" className='text-dark d-flex align-items-center '>
              <FaStar className='mx-1' /> Highlights
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='px-3'>
            <Nav.Link as={Link} to="topics" className='text-dark d-flex align-items-center '>
              <FaBook className='mx-1' /> Topics and Keywords
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <div>
        
        <Outlet/>
      </div>
    </div>

  )
}

export default Fullpage;