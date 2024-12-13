"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUser } from "../redux/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const apiUserData = useSelector((state) => state.usersData.userAPIData);
  //   console.log(apiUserData.usersData.userAPIData);

  useEffect(() => {
    dispatch(fetchApiUser());
  }, []);

  return (
    <div>
      <h1>User list from API</h1>

      {apiUserData.map((user: any) => (
        <div key={user.id}>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}
