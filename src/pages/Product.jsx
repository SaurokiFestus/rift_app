import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product({ items, setItems }) {
  const params = useParams();
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
  return (
    <div>
      <div class="card">
        <h5 class="card-header">
          Name:{" "}
          <span className="">
            {product.name}
          </span>
        </h5>
        <div class="card-body">
          <h5 class="card-title">{product.price}</h5>

          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
