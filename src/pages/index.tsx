/* eslint-disable @next/next/no-html-link-for-pages */
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Next is an SPA</h1>
      <p>Open the network tab and navigate around :)</p>
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
};

export default Home;
