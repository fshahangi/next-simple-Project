import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}
