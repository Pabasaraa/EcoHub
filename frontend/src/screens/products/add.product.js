import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.product.module.css";

const AddProducts = () => {
  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const validateUser = async () => {
    console.log("validating user");
  };

  useEffect(() => {
    validateUser();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (event) => {
    setImages([...images, ...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(productData);

    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("role", productData.role);
    formData.append("adminId", productData.adminId);
    formData.append("productName", productData.productName);
    formData.append("productDescription", productData.productDescription);
    formData.append("productCategory", productData.productCategory);
    formData.append("productPrice", productData.productPrice);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    axios
      .post("http://localhost:8000/products/new", formData)
      .then((response) => {
        console.log(response);
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{
                borderRadius: "15px",
                borderColor: "white",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <div className="card-body p-5 text-center">
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-3">Add Item</h2>
                  <hr className="mb-4" style={{ opacity: "0.15" }} />

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="role"
                      name="role"
                      className="form-control"
                      placeholder="role"
                      defaultValue={productData.role}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="adminId"
                      name="adminId"
                      className="form-control"
                      placeholder="adminId"
                      defaultValue={productData.adminId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="productCategory"
                      className="form-control"
                      placeholder="Product Category"
                      name="productCategory"
                      defaultValue={productData.productCategory}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="productName"
                      className="form-control"
                      placeholder="Product Name"
                      name="productName"
                      defaultValue={productData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="productDescription"
                      className="form-control"
                      placeholder="Product Description"
                      name="productDescription"
                      defaultValue={productData.productDescription}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="productPrice"
                      className="form-control"
                      placeholder="Product Price"
                      name="productPrice"
                      defaultValue={productData.productPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="file"
                      id="productImages"
                      className="form-control"
                      placeholder="Product Images"
                      name="productImages"
                      onChange={handleImageChange}
                      required
                    />
                  </div>

                  <button
                    style={{ marginTop: "15px", width: "fit-content" }}
                    type="submit"
                  >
                    Save
                  </button>

                  <hr className="my-4" style={{ opacity: "0.15" }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddProducts;
