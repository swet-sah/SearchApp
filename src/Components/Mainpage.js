import React, { useContext } from 'react'
import SearchPage from './SearchPage'
import Resultpage from './Resultpage'
import ResultCard from './ResultCard'
import { ApiContext } from './ApiContexts/ApiContext'
import Fullpage from './fullpage/Fullpage'
import Highlights from './fullpage/Highlights'
const Mainpage = () => {
  const { showResult, handleSearchButton,setFullPage,getFullPage } = useContext(ApiContext);
  return (
    <>
    {/* <Fullpage/> */}
      {(showResult ? <Resultpage /> : <SearchPage onSearch={handleSearchButton} />)}
      
    </>
  )
}

export default Mainpage
