import Link from "next/link";
import "./about.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About main</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About student</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About college</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
