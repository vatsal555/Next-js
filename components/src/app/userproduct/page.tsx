async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userList();
  console.log(users);

  return (
    <div>
      <h1>User Name List </h1>
      {users.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
        </div>
      ))}
    </div>
  );
}
