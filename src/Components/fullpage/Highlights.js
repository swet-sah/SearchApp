import React from 'react';
import '../Style.css'
import { Accordion, Card, Button, Container } from 'react-bootstrap';

const Highlights = () => {
  const highlightsData = [
    {
      title: 'Highlight 1',
      content: 'Description for Highlight 1',
    },
    {
      title: 'Highlight 2',
      content: 'Description for Highlight 2',
    },
    {
      title: 'Highlight 3',
      content: 'Description for Highlight 1',
    },
    {
      title: 'Highlight 4',
      content: 'Description for Highlight 2',
    },
    // Add more highlights as needed
  ];

  return (
    <>
      <Container className='mt-5'>
        <Accordion defaultActiveKey="0" className='d-flex flex-column justify-content-center'>
          {highlightsData.map((highlight, index) => (
            <Accordion.Item eventKey={index} className='m-4'  >
              <Accordion.Header   >{highlight.title}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>

  );
};

export default Highlights;
