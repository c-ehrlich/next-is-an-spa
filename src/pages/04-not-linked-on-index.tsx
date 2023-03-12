/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useState } from "react";

export default function NormalPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This page is not linked from the index page</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <div>
        Link to static page <a href="/01-static">anchor</a>{" "}
        <Link href="/01-static">Link</Link>
      </div>
      <div>
        Link to ssr page <a href="/02-ssr">anchor</a>{" "}
        <Link href="/02-ssr">Link</Link>
      </div>
      <div>
        Link to ssg page <a href="/03-ssg">anchor</a>{" "}
        <Link href="/03-ssg">Link</Link>
      </div>
    </div>
  );
}
