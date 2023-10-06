import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Fullpage from './Components/fullpage/Fullpage';
import Mainpage from './Components/Mainpage';
import Article from './Components/fullpage/Article';
import Highlights from './Components/fullpage/Highlights';
import TopicKeywordComponent from './Components/fullpage/TopicKeywordComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/fullpage' element={<Fullpage />}>
          <Route path='article' element={<Article/>}/>
          <Route path='highlights' element={<Highlights/>}/>
          <Route path='topics' element={<TopicKeywordComponent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
