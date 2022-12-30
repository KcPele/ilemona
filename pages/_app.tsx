import "../styles/globals.css";
import "../styles/globals.navbar.css";
import "../styles/globals.header.css";
import "../styles/globals.usage.css";
import "../styles/globals.article.css";
import "../styles/globals.started.css";
import "../styles/globals.blog.css";
import "../styles/globals.welcome.css";
import "../styles/globals.footer.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ilemona.</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
