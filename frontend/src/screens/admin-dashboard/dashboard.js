import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Sidebar from "../../components/admin/Sidebar.js";
import styles from "./styles/dashboard.module.css";

import AddProducts from "./products/add.product.js";
import ListProducts from "./products/list.products.js";
import UpdateProduct from "./products/update.product.js";

import OrdersList from "./orders/list.orders.js";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <Container className={styles.content}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />

          <Route path="products/add" element={<AddProducts />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="products/update/:id" element={<UpdateProduct />} />

          <Route path="orders" element={<OrdersList />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Dashboard;
