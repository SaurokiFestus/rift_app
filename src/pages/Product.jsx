import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Product({ items, setItems }) {
  const params = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({});
  const { id } = params;

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  
  console.log(product);


  function handleOrderClick() {
    fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: id }),
    }).then((r) => {
      if (r.ok) {
        setItems(items + 1);
        navigate("/view_cart");
      } else {
        // r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <div key={id} class="card">
        <h5 class="card-header">
          Name:{" "}
          <span className="">
            {product.name}
          </span>
        </h5>
        <div class="card-body">
          <h5 class="card-title">{product.price}</h5>

          <a href="#" class="btn btn-primary" onClick={handleOrderClick}>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
