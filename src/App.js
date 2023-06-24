import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { PostDetails } from './pages/post-details/postDetails';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:postId" element={<PostDetails/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
