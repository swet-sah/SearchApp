import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { ApiContext } from './ApiContexts/ApiContext';
import Resultpage from './Resultpage';
import imge from '../logo.png'
import './Style.css'

const SearchPage = () => {
    const { SearchVal, setSearchVal,showResult,handleSearchButton , setShowResult,click} = useContext(ApiContext);
    const handleSearchBox = (e) => {
        
        setSearchVal(e.target.value);
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "15rem" }}>
            <div className="search-component d-flex flex-column align-items-center vh-100">
                <div className="company-info mb-4 text-center w-50">
                    <img src={imge} alt="Company Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <div className="search-box mb-4 myborder" style={{border: "0.05rem solid rgb(210,210,210)", borderRadius:"4rem" ,overflow:"hidden" }}>
                    <Form inline style={{width:"100%", margin:"0px"}}>
                        <InputGroup> 
                            <InputGroup.Text id="basic-addon1" style={ {backgroundColor: 'transparent',  border:"none",}} className="p-3"  >
                                <BsSearch style={{ opacity: 1 }} />
                            </InputGroup.Text>
                            <Form.Control
                                style={{ width: "35rem", height: "3rem", border:"none" }}
                                placeholder="Search anything.."
                                aria-label="Search anything.."
                                aria-describedby="basic-addon1"
                                value={SearchVal}
                                onChange={handleSearchBox}
                                className='p-1'
                            />
                        </InputGroup>
                    </Form>
                </div>
              {click && <span style={{fontSize:"medium", color:"red", margin:".5rem"}}>Enter keyword</span>}
                <div className="search-button">
                    <Button
                        size="lg"
                        style={{
                            backgroundColor: "#052c65",
                            borderRadius: "50px", 
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: "1rem",
                        }}
                        className='px-5'
                        onClick={() => { handleSearchButton() }}
                    >

                        Search the web
                    </Button>

                </div>
                {showResult && <Resultpage />}
                
            </div>
        </div>
    );
}

export default SearchPage;
