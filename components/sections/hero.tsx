import Image from "next/image";
import styles from "./hero.module.scss";
import CtaButton from "@/components/ui/ctaButton";

export default function Hero() {

  return (
      <section className={styles.hero}>
        <h2 className={styles.hero__heading}>
          <span className={styles.hero__heading__text}>キャリアを変える</span>
          <span className={styles.hero__heading__text}>武器になる</span>
          <span className={styles.hero__heading__text}>Webスキルを</span>
        </h2>
        <div className={styles.hero__bg}>
          <Image
            src="/images/fv-woman-img.png"
            alt=""
            width={574}
            height={397}
            className={styles.hero__bg__woman__img}
          />
          <Image
            src="/images/fv-man-img.png"
            alt=""
            width={532}
            height={398}
            className={styles.hero__bg__man__img}
          />
          <Image
            src="/images/fv-bg-img1.png"
            alt=""
            width={390}
            height={296}
            className={styles.hero__bg__cloud__img1}
          />
          <Image
            src="/images/fv-bg-img2.png"
            alt=""
            width={389}
            height={296}
            className={styles.hero__bg__cloud__img2}
          />
        </div>
        <p className={styles.hero__detail}>
            <span className={styles.hero__detail__text1}>CareerCraft</span>
            <span className={styles.hero__detail__text2}>は仕事に直結する</span><br/>
            <span className={styles.hero__detail__text3}>”本当に使える学び”を提供します。</span>
        </p>
        <CtaButton/>
      </section>
  );
}
