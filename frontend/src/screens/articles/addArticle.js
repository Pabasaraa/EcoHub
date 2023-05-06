import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.article.module.css";

const AddArticles = () => {
  const [articleData, setArticleData] = useState({});

  const navigate = useNavigate();

  const validateUser = async () => {
    console.log("validating user");
  };

  useEffect(() => {
    validateUser();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticleData({ ...articleData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(articleData);

    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("role", articleData.role);
    formData.append("adminId", articleData.adminId);
    formData.append("articleTitle", articleData.articleTitle);
    formData.append("articleAuthor", articleData.articleAuthor);
    formData.append("articleDescription", articleData.articleDescription);
    formData.append("articleContent", articleData.articleContent);
    formData.append("dateOfPublication", articleData.dateOfPublication);

   

    axios
      .post("http://localhost:8000/articles/new", formData)
      .then((response) => {
        console.log(response);
        navigate("/articles");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="container py-5 h-100">
      <div className="row d-flex h-100">
        <div className="card-body text-center">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4">Add New Article</h2>
            <hr className="mb-4" style={{ opacity: "0.15" }} />

            <div className="form-group mb-4">
              <label
                htmlFor="role"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Role:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="form-control"
                defaultValue={articleData.role}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="adminId"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                admin ID:
              </label>
              <input
                type="text"
                id="adminId"
                name="adminId"
                className="form-control"
                defaultValue={articleData.adminId}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="articleTitle"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Article Title:
              </label>
              <input
                type="text"
                id="articleTitle"
                name="articleTitle"
                className="form-control"
                defaultValue={articleData.articleTitle}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="articleAuthor"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Author of the Article:
              </label>
              <input
                type="text"
                id="articleAuthor"
                className="form-control"
                name="articleAuthor"
                defaultValue={articleData.articleAuthor}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="articleDescription"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Article Description:
              </label>
              <textarea
                id="articleDescription"
                className="form-control"
                name="articleDescription"
                defaultValue={articleData.articleDescription}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="articleContent"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Article Content:
              </label>
              <textarea
                id="articleContent"
                className="form-control"
                name="articleContent"
                defaultValue={articleData.articleContent}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="dateOfPublication"
                className="mb-2 text-muted"
                style={{ float: "left" }}
              >
                Date of Publication:
              </label>
              <input
                type="date"
                id="dateOfPublication"
                className="form-control"
                name="dateOfPublication"
                defaultValue={articleData.dateOfPublication}
                onChange={handleInputChange}
                required
              />
            </div>

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <button className={styles.btn} type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddArticles;
