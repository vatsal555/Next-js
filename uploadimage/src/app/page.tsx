"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile]: any = useState();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(file);
    const data = new FormData();
    data.set("file", file);
    let result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("file uploaded");
    }
  };
  return (
    <div>
      <h1>Upload Image with Nextjs</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />{" "}
        <br /> <br />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}
