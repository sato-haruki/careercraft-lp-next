import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/sections/hero";
import Worries from "@/components/sections/worries";
import Features from "@/components/sections/features";
import Voice from "@/components/sections/voice";

export default function Home() {
  return (
      <main>
          <Hero />
          <Worries />
          <Features />
          <Voice />
      </main>
  );
}
