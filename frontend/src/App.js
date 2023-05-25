import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/common/header";
import Footer from "./components/common/footer";

import AllProducts from "./screens/products/all.products";
import SingleProduct from "./screens/products/single.product";

import Cart from "./screens/cart/cart.page";
import Checkout from "./screens/payment/checkout.page";

import Dashboard from "./screens/admin-dashboard/dashboard";
import AddArticles from "./screens/articles/addArticle";
import ArticleList from "./screens/articles/articleList";
import UpdateArticle from "./screens/articles/updateArticle";
import ContactForm from "./screens/contactUs/contactForm";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <NavBar />
       
        <Routes>
          <Route path="/admin/dashboard/*" element={<Dashboard />} />

          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/addArticle" element={<AddArticles />} />
          <Route path="/articleList" element={<ArticleList />} />
          <Route path="/updateArticle/:id" element={<UpdateArticle />} />
          <Route path="/contactForm" element={<ContactForm />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
