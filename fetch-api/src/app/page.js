import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <Link href="/productlist">Go to productlist Page</Link>
    </div>
  );
}
