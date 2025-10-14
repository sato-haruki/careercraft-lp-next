"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  const navRef = useRef<HTMLElement | null>(null);
  const hamRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const ham = hamRef.current;
    const nav = navRef.current;
    if (!ham || !nav) return;

    // ハンバーガーメニュー開閉
    const toggleMenu = () => {
      ham.classList.toggle(styles.active);
      nav.classList.toggle(styles.active);
    };
    ham.addEventListener("click", toggleMenu);

    // ナビリンククリックでメニューを閉じる
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        ham.classList.remove(styles.active);
        nav.classList.remove(styles.active);
      });
    });

    // クリーンアップ
    return () => {
      ham.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__title}>
          <a className={styles.careercraftLogo} href="#">
            <Image
              src="/images/careercraft-logo.png"
              alt="CareerCraft ロゴ"
              width={40}
              height={40}
              className={styles.careercraftLogoImg}
            />
            <p className={styles.header__title__text}>CareerCraft</p>
          </a>
        </h1>

        <nav
          className={styles.header__nav}
          id="js-nav"
          ref={navRef}
        >
          <ul className={`${styles.nav__items} ${styles.navItems}`}>
            <li className={styles.navItems__item}>
              <a href="#worries">お悩み</a>
            </li>
            <li className={styles.navItems__item}>
              <a href="#features">選ばれる理由</a>
            </li>
            <li className={styles.navItems__item}>
              <a href="#course">コース＆料金</a>
            </li>
            <li className={styles.navItems__item}>
              <a href="#voice">受講生の声</a>
            </li>
            <li className={styles.navItems__item}>
              <a href="#qa">よくある質問</a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.header__hamburger} ${styles.hamburger}`}
          id="js-hamburger"
          ref={hamRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
