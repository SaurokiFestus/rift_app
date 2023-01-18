import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const icons = { color: "#f48d4f" };

  const [list, setList] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/products")
    .then((res) => res.json())
    .then((data)=>{
      setList(data)
    })
  },[])

  // console.log(list);

  return (
    <div>
      
    {list.map((lists)=> (
      <div class="col my-3">
      <div class="col-lg-4 col-sm-7 my-3  ">
        <div class="card-body-content">
          <h1 class="header py-3">
            <i class="bi bi-heart-fill"></i>
          </h1>
          <h4 class="card-title">{lists.name}</h4>
          <h4 class="card-title">{lists.scale}</h4>
          <button class="btn btn-dark" onClick={() => navigate(`/view_product/${lists.id}`)}>View Product</button>
        </div>
      </div>

      
    </div>
    ))}


      

    </div>
  );
}

export default Home;
