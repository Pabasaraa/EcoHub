import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/common/header";
import Footer from "./components/common/footer";

import AllProducts from "./screens/products/all.products";
import SingleProduct from "./screens/products/single.product";
import AddSeminar from "./screens/seminar/add.seminar";
import SeminarList from "./screens/seminar/seminar.list";
import SeminarManage from "./screens/seminar/seminar.manage";
import UpdateSeminar from "./screens/seminar/update.seminar";

import Login from "./screens/user/user.login";
import Register from "./screens/user/user.register";
import Profile from "./screens/user/user.profile";

import Home from "./screens/home/home";

import Cart from "./screens/cart/cart.page";
import Checkout from "./screens/payment/checkout.page";

import Dashboard from "./screens/admin-dashboard/dashboard";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard/*" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/seminar/new" element={<AddSeminar />} />
          <Route path="/seminars" element={<SeminarList />} />
          <Route path="/seminar/manage" element={<SeminarManage />} />
          <Route path="/seminar/update/:id" element={<UpdateSeminar />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
