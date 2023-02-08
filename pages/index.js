import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { NavBar } from "./components/NavBar";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";
import { Resume } from "./components/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume Nabeel Ayubee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Welcome />
        <About />
        <Resume />
      </main>
    </>
  );
}
