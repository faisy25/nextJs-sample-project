import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

// used third party javascript using script
// {
//   /* <Script
//         src="https://connect.facebook.net/en_US/sdk.js"
//         strategy="lazyOnload"
//         onLoad={() =>
//           console.log(`script loaded correctly, window.FB has been populated`)
//         }
//       ></Script> */
// }
