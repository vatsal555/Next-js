import { Metadata } from "next";

export default function User() {
  return (
    <div>
      {/* <title>Student Page</title> not valid */}
      <h1>User Page</h1>
    </div>
  );
}

//static metadata
// export const metadata: Metadata = {
//   title: "User page",
//   description: "User Page Description",
// };

//dynamic metadatas
export async function generateMetadata() {
  return {
    title: "User  Page",
    description: "User Page Description",
  };
}
