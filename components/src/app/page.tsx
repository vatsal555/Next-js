import Image from "next/image";
import profile from "../../public/vercel.svg";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Image using in Next js</h1>
      <Image src={profile} alt="not found" height={200} width={200} />
      <br />
      <br />
      <img src={profile.src} height={200} width={200} alt="not found" />
      <br />
      <br />
      <Image
        alt="not found"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09052deMdesScP6f6qF6reAwUzLWFJm6JHw&s"
        width={200}
        height={200}
      />
    </div>
  );
}
