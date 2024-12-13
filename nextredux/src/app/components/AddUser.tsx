"use client";

import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function AddUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(name);
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div className="add-user">
      <h1> Add User </h1>
      <input
        type="text"
        className="add-user-input"
        placeholder="Add New User"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="add-user-btn" onClick={onSubmit}>
        Add User
      </button>
      <Link className="color" href="/removeuser">
        Remove User
      </Link>
    </div>
  );
}
