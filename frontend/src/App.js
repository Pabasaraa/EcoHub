import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import AddProducts from "./screens/products/add.product";
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

// import Cart from "./screens/cart/cart.page";

// import Checkout from "./screens/payment/checkout.page";

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/products/add" element={<AddProducts />} /> */}
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/seminar/new" element={<AddSeminar />} />
          <Route path="/seminar/list" element={<SeminarList />} />
          <Route path="/seminar/manage" element={<SeminarManage />} />
          <Route path="/seminar/update/:id" element= {<UpdateSeminar/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
