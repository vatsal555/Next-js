"use client";

import { useEffect, useState } from "react";
import "./../../../style.css";

export default function Page({ params }: any) {
  const id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  const updateUser = async () => {
    let result = await fetch("http://localhost:3000/api/users" + id, {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    // console.log(result);
    if (result.success) {
      alert("User Information Updated");
    } else {
      alert("Please try with valid input");
    }
  };
  return (
    <div>
      <h1>Update User Details</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}
