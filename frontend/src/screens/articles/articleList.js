import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, InputGroup } from "react-bootstrap";

import styles from "./styles/list.articles.module.css";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const retrieveItems = () => {
    axios
      .get(`http://localhost:8000/articles/get/all`)
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    retrieveItems();
  }, []);

 

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/articles/delete/${id}`).then(() => {
      alert("Delete Successfully");
      this.retrieveItems();
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchArticles = () => {
    setArticles([]);
    axios
      .post("http://localhost:8000/articles/search", {
        searchTerm: searchTerm,
      })
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">List of Articles</h2>

        <InputGroup className={styles.searchBar}>
          <FormControl
            className={styles.searchInput}
            placeholder="Search Articles"
            aria-label="Search Articles"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button
            variant="outline-secondary"
            className={styles.searchBtn}
            onClick={searchArticles}
          >
            Search
          </Button>
        </InputGroup>

        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">adminId</th>
              <th scope="col">articleTitle</th>
              <th scope="col">articleAuthor</th>
              <th scope="col">articleDescription</th>
              <th scope="col">articleContent</th>
              <th scope="col">dateOfPublication</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articles &&
              this.state.articles.map((articles, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{articles.adminId}</td>
                  <td>{articles.articleTitle}</td>
                  <td>{articles.articleAuthor}</td>
                  <td>
                    {" "}
                    {articles.articleContent.length > 500
                      ? articles.articleContent.slice(0, 500) + "..."
                      : articles.articleContent}
                  </td>
                 
                  <td>
                    <a
                      className="btn btn-warning"
                      onClick={() => navigate(`update/${articles._id}`)}
                    >
                      <i className="fas fa-edit"></i>&nbsp; Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      onClick={() => onDelete(articles._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp; Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ArticleList;
