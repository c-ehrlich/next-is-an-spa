import { type AppType } from "next/dist/shared/lib/utils";
import { useState } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>_app.tsx</p>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <p>------------------------------</p>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
