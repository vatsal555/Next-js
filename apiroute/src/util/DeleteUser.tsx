"use client";
export default function DeleteUser(props: any) {
  const deleteUser = async () => {
    const userId = props.id;
    let result = await fetch("http://localhost:3000/api/users/" + userId, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      alert("User is deleted");
    }
  };
  return <button onClick={deleteUser}>Delete</button>;
}
