"use client";
export default function Price({ id }) {
  console.log("id", id);

  return (
    <div>
      <button onClick={() => alert(id)}>check id</button>
    </div>
  );
}
