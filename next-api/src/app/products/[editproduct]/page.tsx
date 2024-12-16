"use client";
import { useEffect, useState } from "react";
import "./../../style.css";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let productId = props.params.editproduct;
    let data = await fetch(`http://localhost:3000/api/products/${productId}`);
    data = await data.json();
    console.log(data);

    // data = data.result;
    if (data.success) {
      let result = data.result;
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  const updateProduct = async () => {
    const productId = props.params.editproduct;
    let data = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    data = await data.json();
    if (data.result) {
      alert("Product has been Updated");
    }
  };

  return (
    <div>
      <h1>Update Products</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Color"
        className="input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Company"
        className="input"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn" onClick={updateProduct}>
        Update Product
      </button>
      <Link className="color" href={`/products`}>
        Go to product page
      </Link>
    </div>
  );
}
