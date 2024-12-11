import Link from "next/link";

export async function getUser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUser();
  //   console.log(users);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((item: any) => (
        <div key={item.id}>
          <Link href={`users/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
