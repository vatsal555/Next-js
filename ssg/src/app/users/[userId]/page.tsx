import getUser from "../../../../services/getuser";

export default async function Page(props: any) {
  const getUserList = getUser();
  const users = await getUserList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  console.log(users[currentId - 1]);

  return (
    <div>
      <h3>User detail Page</h3>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>Website: {userData.website}</h4>
    </div>
  );
}
export async function generateStaticParams() {
  const getUserList = getUser();
  const users = await getUserList;
  return users.map((user: any) => ({
    userId: user.id.toString(),
  }));
}
