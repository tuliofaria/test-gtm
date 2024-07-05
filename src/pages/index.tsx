import { sendGTMEvent } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onClick = () => {
    sendGTMEvent({ event: "signin_button" });
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button className="border" onClick={onClick}>
        Emit event
      </button>
      <Link href="/page1">Page 1</Link>
      <Link href="/page2">Page 2</Link>
    </main>
  );
}
