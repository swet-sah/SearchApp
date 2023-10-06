import React, { useContext } from 'react'
import ResultCard from './ResultCard'
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
import { ApiContext } from './ApiContexts/ApiContext'
import SearchPage from './SearchPage'
import { BsChevronLeft, BsChevronRight, BsSearch } from 'react-icons/bs'
import { GrLinkNext } from 'react-icons/gr'
import './Style.css'

const Resultpage = () => {
    const { currentPage, setCurrentPage ,handleSearchButton,hasMoreData,setHasMoreData} = useContext(ApiContext);
    const { SearchVal, setSearchVal } = useContext(ApiContext);
    const handleSearchBox = (e) => {
        setSearchVal(e.target.value);
    }
    return (
        <>
            <div className='container'>
                <div className="search-box m-4 d-flex justify-content-center">
                    <div className="d-flex myborder" style={{ border: "0.05rem solid rgb(210,210,210)", borderRadius: "4rem", overflow: "hidden", width: "40rem" }}>
                        <Form inline style={{ width: "100%", }}>
                            <InputGroup className='d-flex flex-row justify-content-between align-items-center'>
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'transparent', border: "none", }} className="p-3">
                                    <BsSearch style={{ opacity: 1 }} />
                                </InputGroup.Text>
                                <Form.Control
                                    style={{ flex: 1, height: "3rem", border: "none" }}
                                    placeholder="Search anything.."
                                    aria-label="Search anything.."
                                    aria-describedby="basic-addon1"
                                    value={SearchVal}
                                    onChange={handleSearchBox}
                                    className='p-1'
                                />
                                <InputGroup.Text id="basic-addon1" style={{ backgroundColor: 'transparent', border: "none" }} className="p-3">
                                    <GrLinkNext onClick={()=>handleSearchButton()}/>
                                </InputGroup.Text>
                            </InputGroup>


                        </Form>
                    </div>
                </div>


                <Row>
                    <ResultCard />
                </Row>
                <div className="d-flex justify-content-between mt-4">
                    <Button
                        variant="outline-primary"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="button-primary-outline"
                        style={{ fontSize: '1rem', fontWeight: 'bold', padding: '8px 20px' }}
                    >
                        <BsChevronLeft /> Previous
                    </Button>
                    <Button
                       disabled={!hasMoreData}
                        variant="outline-primary"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="button-primary-outline"
                        style={{ fontSize: '1rem', fontWeight: 'bold', padding: '8px 20px' }}
                    >
                        Next <BsChevronRight />
                    </Button>
                </div>


            </div>

        </>
    )
}

export default Resultpage

