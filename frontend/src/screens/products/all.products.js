import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, FormControl, InputGroup } from "react-bootstrap";
import axios from "axios";

import styles from "./styles/all.products.module.css";

import Loader from "../../components/common/spinner";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);
  const [imageBuffers, setImageBuffers] = useState([]);
  const [base64Strings, setBase64Strings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/get/all")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (products) {
      const buffers = products.map((product) => product.productImages[0].data);
      setImageBuffers(buffers);
    }
  }, [products]);

  useEffect(() => {
    const strings = imageBuffers.map((buffer) => {
      const binary = Array.from(new Uint8Array(buffer))
        .map((b) => String.fromCharCode(b))
        .join("");
      return `data:image/jpeg;base64,${btoa(binary)}`;
    });
    setBase64Strings(strings);
  }, [imageBuffers]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchProducts = () => {
    axios
      .post("http://localhost:8000/products/search", {
        searchTerm: searchTerm,
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className={styles.container} style={{ padding: "0 60px" }}>
        <InputGroup className={styles.searchBar}>
          <FormControl
            className={styles.searchInput}
            placeholder="Search products"
            aria-label="Search products"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button
            variant="outline-secondary"
            className={styles.searchBtn}
            onClick={searchProducts}
          >
            Search
          </Button>
        </InputGroup>
        <h5>All Products:</h5>
        <br />
        {products && base64Strings.length > 0 ? (
          <div className={styles.productGrid}>
            {products.map((product, key) => (
              <Card key={product.id} className={styles.productCard}>
                <Card.Img
                  variant="top"
                  src={base64Strings[key]}
                  className={styles.productIms}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    {product.productName}
                  </Card.Title>
                  <Card.Text style={{ marginTop: "-10px" }}>
                    <Button
                      variant="link"
                      onClick={() => navigate(`/sellers/${product.adminId}`)}
                      style={{ padding: "0", textDecoration: "none" }}
                    >
                      <small className="text-muted">{product.adminId}</small>
                    </Button>
                  </Card.Text>
                  <Card.Text
                    className={`
                    text-success ${styles.productPrice}`}
                  >
                    {product.productPrice} LKR
                  </Card.Text>
                  <hr style={{ opacity: "0.15", marginBottom: "25px" }} />
                  <Button
                    className={styles.viewBtn}
                    variant="outline-secondary"
                    onClick={() => navigate(`/products/${product._id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default AllProducts;