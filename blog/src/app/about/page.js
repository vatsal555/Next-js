"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./about.css";

const About = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push("/about" + route);
  };
  return (
    <div>
      <h1 className="heading">About Page</h1>
      <Link href="/">Go to Home Page</Link>
      <button onClick={() => navigate("/aboutstudent")}>About Student</button>
      <button onClick={() => navigate("/aboutcollege")}>About College</button>
    </div>
  );
};

export default About;
