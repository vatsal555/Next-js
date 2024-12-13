"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function Page() {
  const userData = useSelector((state) => state.usersData.users);
  const dispatch = useDispatch();
  //   console.log(userData);
  return (
    <div className="display-user">
      <h1>Remove Page User</h1>
      {userData.map((user: any) => (
        <div className="user-item" key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => dispatch(removeUser(user.id))}>
            remove user
          </button>
        </div>
      ))}
    </div>
  );
}
