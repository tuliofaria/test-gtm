import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <div>
        <Link href="/">Back</Link>
        <Link href="/page1">Page 1</Link>
      </div>
    </div>
  );
};

export default Page2;
