import React, {useState, useEffect } from "react";
import { getCategories } from "./helper/adminapicall";

const ProductItem = () => {

    const [products, setProducts] = useState({
        name:"",
        categories:[],
        price:"",
        stock:""
    })
    const {name,categories,price,stock}=products;
    const preload = ()=>{
        getCategories().then(data => {
            console.log(data);
            if (data.error) {
                setProducts({ ...products, error: data.error });
            } else {
                setProducts({ ...products, categories: data});
            }
          });
    }

    useEffect(()=>{
        preload()
    })
  return (
    <div>
          <div>
            <figure>
              <img
                src=""
                alt={name}
              />
            </figure>
          </div>
          <div>
            <p>
              {name}
              <span className="bg-primary">${price}</span>
            </p>
            {products.stock > 0 ? (
              <small>{stock}</small>
            ) : (
              <small className="bg-danger">Out Of Stock</small>
            )}
            {categories &&
            categories.map((product, index) => (
              <option key={index} value={product._id}>
                  {product.name}
              </option>
            ))}
          </div>
    </div>
  );
};

export default ProductItem;