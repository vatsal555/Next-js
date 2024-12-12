"use client";
import { useState } from "react";
import "./../style.css";
import { useRouter } from "next/navigation";
export default function Page() {
  const navigation = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const addProduct = async () => {
    setName("");
    setPrice("");
    setColor("");
    setCompany("");
    setCategory("");
    // console.log(name, price, color, company, category);
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("New Product Added");
    }
  };

  return (
    <div>
      <h1>Add Products</h1>
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
      <button className="btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}
