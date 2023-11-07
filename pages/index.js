import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Main from "@/layouts/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>{process.env.myName}</h1>
      <Main>Home Page</Main>
    </div>
  );
}
