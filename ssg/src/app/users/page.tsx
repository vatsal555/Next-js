import Link from "next/link";
import getUser from "../../../services/getuser";

export default async function Page() {
  const getuserlist = getUser();
  const users = await getuserlist;
  // console.log(users);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user: any) => (
        <div key={user?.id}>
          <h3>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
