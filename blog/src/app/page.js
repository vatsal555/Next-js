"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world</h1>
        <Link href="/login">Go to Login Page</Link>
        <br />
        <br />
        <Link href="/about">Go to About Page</Link>
        <br />
        <br />
        <button onClick={() => navigate("/login")}>Go to Login Page</button>
        <br />
        <br />
        <button onClick={() => navigate("/login")}>Go to About Page</button>
      </main>
    </div>
  );
}
