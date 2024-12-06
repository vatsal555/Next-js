"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();

  return (
    <div>
      {pathName == "/login/loginteacher" ? (
        <Link href="/login">Go to main login page</Link>
      ) : (
        <ul className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      )}
      {children}
    </div>
  );
}
