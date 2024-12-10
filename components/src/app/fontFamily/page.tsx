import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Font() {
  return (
    <div>
      {/* <h1 style={{ fontFamily: "Roboto", fontWeight: 100 }}>
        Fonts Optimization in Next js
      </h1> */}
      <h1 className={roboto.className}>Font with Next js font feature</h1>
    </div>
  );
}
