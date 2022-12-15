import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

export default function Product() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.log(err, "Post Not Found");
      });
  });
  return (
    <>
      <div className="product-container">
        <main>
          <h2>Brand New Product</h2>
          <div className="button-row">
            <button className="f-button">View All</button>
            <button>View All</button>
            <button>View All</button>
            <button>Shirts</button>
          </div>
        </main>
        <div className="container">
          {post.map((p) => {
            return (
              <div className="single-post" key={p.id}>
                <img src={p.image} alt="post-pic" />

                <p className="p-title">
                  {p.title > 10 ? p.tile : p.title.slice(0, 15)}
                </p>
                <p className="p-price">${p.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
