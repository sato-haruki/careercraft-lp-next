import Image from "next/image";
import styles from "./worries.module.scss";

export default function Worries() {

  return (
    <>
      <section className={styles.worries}>
        <div className={styles.worries__before}>
            <h2 className={styles.worries__before__heading}>
                <span className={styles.worries__before__heading__text1}>こんな</span>
                <span className={styles.worries__before__heading__text2}>お悩み</span>
                <span className={styles.worries__before__heading__text3}>ありませんか？</span>
            </h2>
            <div className={styles.worries__before__comments}>
                <div className={styles.worries__before__comments__group1}>
                    <p className={`${styles.worries__before__comments__group1__comment1} ${styles.worries__before__comment}`}>副業を始めたいけど<br/>何から学べばいいか分からない</p>
                    <p className={`${styles.worries__before__comments__group1__comment2} ${styles.worries__before__comment}`}>独学で学んでも<br/>挫折してしまう</p>
                </div>
                <div className={styles.worries__before__comments__group2}>
                    <p className={`${styles.worries__before__comments__group2__comment3} ${styles.worries__before__comment}`}>本業で成果につながる<br/>学び方がわからない</p>
                    <p className={`${styles.worries__before__comments__group2__comment4} ${styles.worries__before__comment}`}>忙しくてまとまった<br/>勉強時間が確保できない</p>
                </div>
            </div>
            <Image
                src="/images/worries-before-img.png"
                alt=""
                width={194}
                height={188}
                className={styles.worries__before__img}
            />
        </div>
        <div className={styles.worries__after}>
            <div className={styles.worries__after__title}>
                <p className={styles.worries__after__subtitle}>ご安心ください！</p>
                <p className={styles.worries__after__maintitle}>
                    <span className={styles.worries__after__maintitle__decoration}>CareerCraft</span>
                    でそんなお悩みを<br/>解決できます！
                </p>
            </div>
            <div className={styles.worries__after__comments}>
                <div className={styles.worries__after__comments__group1}>
                    <p className={`${styles.worries__after__comments__group1__comment1} ${styles.worries__after__comment}`}>学ぶべきステップが<br/>明確になり迷わず進める！</p>
                    <p className={`${styles.worries__after__comments__group1__comment2} ${styles.worries__after__comment}`}>サポート付きで<br/>挫折せずにスキル取得</p>
                </div>
                <div className={styles.worries__after__comments__group2}>
                    <p className={`${styles.worries__after__comments__group2__comment3} ${styles.worries__after__comment}`}>本業でも成果を出し、<br/>キャリアアップにつながる</p>
                    <p className={`${styles.worries__after__comments__group2__comment4} ${styles.worries__after__comment}`}>1日30分からでも<br/>効率よく学べる！</p>
                </div>
            </div>
            <Image
                src="/images/worries-after-img.png"
                alt=""
                width={212}
                height={230}
                className={styles.worries__after__img}
            />
        </div>
      </section>
    </>
  );
}
