/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useState } from "react";

export default function NormalPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Normal Page</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <div>
        Link to home <a href="/">anchor</a> <Link href="/">Link</Link>
      </div>
      <div>
        Link to ssr page <a href="/02-ssr">anchor</a>{" "}
        <Link href="/02-ssr">Link</Link>
      </div>
      <div>
        Link to ssg page <a href="/03-ssg">anchor</a>{" "}
        <Link href="/03-ssg">Link</Link>
      </div>
      <div>
        Link to page not on index <a href="/04-not-linked-on-index">anchor</a>{" "}
        <Link href="/04-not-linked-on-index">Link</Link>
      </div>
    </div>
  );
}
