import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.footer__text}>Copyright 2025 CareerCraft All rights reserved.</p>
    </footer>
  );
}
