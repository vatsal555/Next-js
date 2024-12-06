import Link from "next/link";
import "./login.css";

const Login = () => {
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/">Go to Home Page</Link>
      <Link href="/login/loginstudent">Login page student</Link>
      <Link href="/login/loginteacher">Login page teacher</Link>
    </div>
  );
};

export default Login;
