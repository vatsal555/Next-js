import Link from "next/link";
import "./style.css";

export default function Home() {
  return (
    <div>
      <h1>Next Api with MongoDB</h1>
      <Link className="color" href="/products">
        Products
      </Link>{" "}
      <br />
      <br />
      <Link className="color" href="/addproduct">
        Add Product
      </Link>
    </div>
  );
}
