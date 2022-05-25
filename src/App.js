
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Home/Review';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrder from './Pages/Dashboard/MyOrder';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          {/* <Route path="users" element={<Users></Users>}></Route> */}
          <Route path="users" element={<RequireAdmin>
            <Users />
          </RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          {/* <Route path="history" element={<History></History>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route> */}


        </Route>

      </Routes>
    </div>
  );
}

export default App;
