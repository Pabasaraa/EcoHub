import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Sidebar from "../../components/admin/Sidebar.js";
import styles from "./styles/dashboard.module.css";

import AddProducts from "./add.product.js";
import ListProducts from "./list.products.js";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <Container className={styles.content}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
          <Route path="products/add" element={<AddProducts />} />
          <Route path="products" element={<ListProducts />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Dashboard;
