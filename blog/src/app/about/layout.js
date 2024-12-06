"use client";
import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName == "/about/aboutcollege" ? (
        <Link href="/about"> Go to main about page </Link>
      ) : (
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
      )}
      {children}
    </div>
  );
}
