export async function getUser(id: number) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function Page({ params }) {
  //   console.log(params);
  const user = await getUser(params.userId);
  //   console.log(user);

  return (
    <div>
      <h1>User Details</h1>
      <h3>Name : {user.name}</h3>
      <h3>Age : {user.age}</h3>
      <h3>Email : {user.email}</h3>
      <h3>Id : {user.id}</h3>
    </div>
  );
}
