import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <div>
        <Link href="/">Back</Link>
        <Link href="/page2">Page 2</Link>
      </div>
    </div>
  );
};

export default Page2;
