/* eslint-disable @next/next/no-html-link-for-pages */
import { type InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";

export default function StaticPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Page with getStaticProps</h1>
      <p>Random number: {props.random}</p>
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
        Link to page not on index <a href="/04-not-linked-on-index">anchor</a>{" "}
        <Link href="/04-not-linked-on-index">Link</Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {
      random: Math.random(),
    },
  };
};
