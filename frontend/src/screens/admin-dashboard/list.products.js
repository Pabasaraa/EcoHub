import axios from "axios";
import React, { Component } from "react";

class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    console.log("running");
    this.retrieveItems();
  }

  retrieveItems() {
    axios.get(`http://localhost:8000/products/get/all`).then((res) => {
      console.log(res.data.data);
      if (res.data.data) {
        this.setState({ items: res.data.data });
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/products/delete/${id}`).then(() => {
      alert("Delete Successfully");
      this.retrieveItems();
    });
  };

  filterData(items, searchKey) {
    const result = items.filter(
      (items) =>
        items.name.toLowerCase().includes(searchKey) ||
        items.email.toLowerCase().includes(searchKey)
    );

    this.setState({ items: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/items/search").then((res) => {
      if (res.data) {
        this.filterData(res.data, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <u>
          <h2 className="h-tag">
            <i class="fa-solid fa-list"></i> List of items
          </h2>
        </u>

        <div class="Search-bar">
          <form class="Search-form">
            <input
              class="Input-data"
              type="search"
              placeholder="Search"
              name="searchQuery"
              aria-label="Search"
              onChange={this.handleSearchArea}
            />
          </form>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userId</th>
              <th scope="col">username</th>
              <th scope="col">itemName</th>
              <th scope="col">itemDescription</th>
              <th scope="col">itemPrice</th>
              <th scope="col">itemImages</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items &&
              this.state.items.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.adminId}</td>
                  <td>{product.username}</td>
                  <td>{product.productName}</td>
                  <td>
                    {" "}
                    {product.productDescription &&
                    product.productDescription.length > 100
                      ? product.productDescription.slice(0, 100) + "..."
                      : product.productDescription}
                  </td>
                  <td>{product.productPrice}</td>

                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/dashboard/${product._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp; Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      onClick={() => this.onDelete(product._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp; Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListProducts;
