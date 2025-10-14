import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/sections/hero";
import Worries from "@/components/sections/worries";

export default function Home() {
  return (
    <>    
      <main>
          <Hero />
          <Worries />
      </main>
    </>
  );
}
