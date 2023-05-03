import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AllProducts from "./screens/products/all.products";
import SingleProduct from "./screens/products/single.product";

import Cart from "./screens/cart/cart.page";
import Checkout from "./screens/payment/checkout.page";

import Dashboard from "./screens/admin-dashboard/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/admin/dashboard/*" element={<Dashboard />} />

          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
