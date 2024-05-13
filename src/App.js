import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import FavList from './components/FavList/FavList';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='FavList' element={<FavList />} />  */}
        </Routes>
    </>
  );
}

export default App;