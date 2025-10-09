import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
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

        {/* <nav className={`${styles.header__nav} ${styles.nav}`} id="js-nav">
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
        </nav> */}

        <button
          className={`${styles.header__hamburger} ${styles.hamburger}`}
          id="js-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
