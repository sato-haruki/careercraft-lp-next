import Image from "next/image";
import styles from "./ctaButton.module.scss";

export default function CtaButton() {

  return (
      <a href="#" className={styles.cta}>
        <div className={styles.cta__contents}>
            <Image
                src="/images/pen-icon.png"
                alt=""
                width={29}
                height={30}
                className={styles.cta__contents__icon}
            />
            <span className={styles.cta__contents__text}>無料体験に申し込む</span>
            <span className={styles.cta__contents__decoration}>＞</span>
        </div>
      </a>
  );
}
