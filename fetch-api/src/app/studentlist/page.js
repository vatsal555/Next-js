import Price from "./price";

async function userData() {
  let data = await fetch("https://dummyjson.com/users");
  let result = await data.json();
  return result.users;
}

export default async function Student() {
  let users = await userData();
  console.log(users);

  return (
    <div>
      <h1>Fetch Api with Server Slide Component</h1>
      {users.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <Price id={item.id} />
        </div>
      ))}
    </div>
  );
}
