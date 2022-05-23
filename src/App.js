
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="purchase/:id" element={
          <Purchase />
        }></Route>


      </Routes>
    </div>
  );
}

export default App;
