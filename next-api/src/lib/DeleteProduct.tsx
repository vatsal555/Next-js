"use client";

import { redirect } from "next/navigation";

export default function DeleteProduct({ id }) {
  const removeProduct = async () => {
    let response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    response = await response.json();
    if (response.success) {
      alert("Product Deleted");
      redirect("/products");
    }
  };
  return <button onClick={removeProduct}>Delete</button>;
}
