import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/virat">virat</Link>
        </li>
        <li>
          <Link href="/studentlist/rohit">rohit</Link>
        </li>
        <li>
          <Link href="/studentlist/pant">pant</Link>
        </li>
        <li>
          <Link href="/studentlist/dhoni">dhoni</Link>
        </li>
      </ul>
    </div>
  );
}
