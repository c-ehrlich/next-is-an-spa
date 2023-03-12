/* eslint-disable @next/next/no-html-link-for-pages */
import { type InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useState } from "react";

export default function GsspPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Page with getServerSideProps</h1>
      <p>Random number: {props.random}</p>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <div>
        Link to static page <a href="/01-static">anchor</a>{" "}
        <Link href="/01-static">Link</Link>
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

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    props: {
      random: Math.random(),
    },
  };
};
