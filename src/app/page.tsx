'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme"
import Experience from "./components/experience/experience";

export default function Home() {
  return (
    <>
      <div className="w-full bg-zinc-800">
        <div className="font-mono text-[#FFFFFF] max-w-[1900px] mx-auto px-6 md:px-16 xl:px-15 2xl:px-30">
          <div>
            <Header />
          </div>
          <div className="py-20">
            <AboutMe />
          </div>
          <div className="py-20">
            <Experience />
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Window icon"
            src="/globe.svg"
            width={16}
            height={16} />
          Examples

        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
