"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        let result = await data.json();
        console.log(result);
        setProduct(result.products);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch Api with Next js</h1>
      {product.map((item) => (
        <div key={item.title}>
          <h3>title : {item.title}</h3>
          <h3>price : {item.price}</h3>
        </div>
      ))}
    </div>
  );
}
