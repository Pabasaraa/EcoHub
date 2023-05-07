import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./styles/add.article.module.css";
import image from "./styles/img/background.jpg"

const UpdateArticle = () => {
  const [articleData, setArticleData] = useState({});

  const navigate = useNavigate("");
  const params = useParams();

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get(
        `http://localhost:8000/articles/${params.id}`
      );
      setArticleData(res.data.data);
    };
    getdata();
  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };


  const updateItem = async (e) => {
    e.preventDefault();

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
   
    await axios
      .put(`http://localhost:8000/articles/update/${params.id}`, formData)
      .then((res) => {
        console.log(res);
        alert("Article Updated Successfully");
        navigate("/articleList");
      })
      .catch((err) => {
        console.log(err);
        alert("Article Update Failed!");
      });
  };

  return (
    <div className="container" style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat" }}>
    <section className="container py-5 h-100">
      <div className="row d-flex h-100">
        <div className="card-body text-center">
          <form onSubmit={updateItem}>
            <h2 className="mb-4">Update Article</h2>
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
                placeholder="admin"
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
                placeholder="0123"
                defaultValue={articleData.adminId}
                onChange={handleInputChange}
                required
                disabled
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
                placeholder="New Title1"
                defaultValue={articleData.articleTitle}
                onChange={handleInputChange}
                required
                disabled
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
                placeholder="Mr.Perera"
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
                placeholder="Description 01"
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
                placeholder="content new"
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
                placeholder=""
                name="dateOfPublication"
                defaultValue={articleData.dateOfPublication}
                onChange={handleInputChange}
                required
              />
            </div>

          

            <hr className="mt-4 mb-3" style={{ opacity: "0.15" }} />

            <button className={styles.btn} type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default UpdateArticle;
