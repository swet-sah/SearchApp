import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ApiContext } from './ApiContexts/ApiContext';
import { Col, DropdownItem, Row } from 'react-bootstrap';
import './Style.css';
import { BsBookmarksFill, BsThreeDotsVertical, BsExclamationCircle, BsFileText } from 'react-icons/bs';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const ResultCard = (props) => {
    const { apiData, setApiData, currentPage, setHasMoreData, getFullPage, setFullPage } = useContext(ApiContext);
    const resultsPerPage = 6;

    if (apiData === null) {
        return null;
    }

    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const displayedResults = apiData.slice(startIndex, endIndex);
    setHasMoreData(true);
    if (displayedResults.length < resultsPerPage) {
        setHasMoreData(false);
    }
    const navigateToFullPage = () => {
        window.location.href = '/fullpage'; 
    }


    return (
        <Row xs={1} md={2} className="g-4 mb-4">

            {displayedResults.map((item, ind) => (
                <Col key={ind}>
                    <Card className="h-100" style={{ width: '40rem' }}>
                        <Card.Body>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div >
                                    <Card.Link href={item.url} className="mb-2 text-muted" style={{ textDecoration: 'none' }}>
                                        {item.url.slice(0, 28)}
                                    </Card.Link>
                                </div>


                                <div className='d-flex align-items-center'>
                                    <div className='d-flex flex-row'>
                                        <Card.Link href="#" className="bookmark-link" style={{ color: "#052c65", textDecoration: 'none' }}>
                                            <BsBookmarksFill />
                                           
                                        </Card.Link>
                                    </div>
                                    <div>
                                        <DropdownButton
                                            title={<BsThreeDotsVertical style={{ color: "#052c65" }} />}
                                            id="dropdown-basic-button"
                                            align="end"
                                            variant="link"

                                        >
                                            <div className='button-primary-outline m-1'
                                                onMouseEnter={(e) => e.target.style.color = "white"}  // Change color on hover
                                                onMouseLeave={(e) => e.target.style.color = "#052c65"}>
                                                <Card.Link href="/" style={{ color: "#052c65", textDecoration: "none" }}
                                                    onMouseEnter={(e) => e.target.style.color = "white"}  // Change color on hover
                                                    onMouseLeave={(e) => e.target.style.color = "#052c65"} >
                                                    <BsExclamationCircle className='mx-1' /> Report
                                                </Card.Link>
                                            </div>

                                            <div className='button-primary-outline m-1' >
                                                <Card.Link href={item.url} style={{ color: "#052c65", textDecoration: "none" }}
                                                    onMouseEnter={(e) => e.target.style.color = "white"}  // Change color on hover
                                                    onMouseLeave={(e) => e.target.style.color = "#052c65"}>
                                                    <BsFileText className='mx-1' /> Read Full Article
                                                </Card.Link>
                                            </div>

                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <Card.Title style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                {item.name}
                            </Card.Title>
                            <Card.Text style={{ fontSize: "0.75rem", fontFamily: 'Roboto, sans-serif' }}>
                                {item.description}...
                            </Card.Text>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                        <Button variant="outline-primary"
                                            className='px-3 button-primary-outline '
                                            onClick={()=>navigateToFullPage()}
                                        >Read Full Content
                                        </Button>
                                </div>

                                <div style={{ fontSize: "small" }}>{item.datePublished.slice(0, 10)}</div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ResultCard;
