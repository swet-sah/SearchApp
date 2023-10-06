
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const ApiContext = createContext();
const ApiProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);
    const [SearchVal, setSearchVal] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showResult, setShowResult] = useState(false);
    const [click, setClick] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true);
    const handleSearchButton = () => {
        (SearchVal === "") ? setClick(true) : setClick(false);
        (SearchVal === "") ? setShowResult(false) : setShowResult(true);

    }
    const [getFullPage, setFullPage] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://bing-web-search1.p.rapidapi.com/search',
                    params: {
                        q: SearchVal,
                        mkt: 'en-us',
                        safeSearch: 'Off',
                        textFormat: 'Raw',
                        freshness: 'Day',
                        count: 10,
                        offset: (currentPage - 1) * 5,
                    },
                    headers: {
                        'X-BingApis-SDK': 'true',
                        'X-RapidAPI-Key': '995eca1e5emsh9411f52a3787e94p1a4ef9jsn0283f39234e5',
                        'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                console.log(response.data.value);
                setApiData(response.data.value);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, [SearchVal]);

    return (
        <ApiContext.Provider value={{ apiData, setApiData, SearchVal, setSearchVal, currentPage, setCurrentPage, showResult, handleSearchButton, setShowResult, click, hasMoreData, setHasMoreData, getFullPage, setFullPage }}>
            {children}
        </ApiContext.Provider>
    );
}
export { ApiContext, ApiProvider };
