import Image from "next/image";
import styles from "./features.module.scss";
import CtaButton from "@/components/ui/ctaButton";

export default function Features() {
  const features = [
    {
      number: "01",
      title: "完全オンライン対応",
      text: "全国どこからでも受講可能",
      icon: "/images/japan.png",
    },
    {
      number: "02",
      title: "実務直結カリキュラム",
      text: "現場で通用する実践スキルを習得",
      icon: "/images/pc.png",
    },
    {
      number: "03",
      title: "専門講師によるサポート",
      text: "質問・フィードバック体制を完備",
      icon: "/images/support.png",
    },
    {
      number: "04",
      title: "幅広いスキルセット",
      text: "複合的に学習可能",
      icon: "/images/note.png",
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={styles.features__inner}>
        <h2 className={styles.features__title}>
            CrareerCraftを選ぶ<br/>
            <span className={styles.features__title__decoration}>4</span>
            つの理由
        </h2>

        <div className={styles.features__list}>
          {features.map((feature, index) => (
            <div className={styles.features__item} key={index}>
              <div className={styles.features__left}>
                <span className={styles.features__number}>{feature.number}</span>
              </div>
              <div className={styles.features__right}>
                <div className={styles.features__icon}>
                  <Image
                    className={styles.icon}
                    src={feature.icon}
                    alt={`${feature.title}のアイコン`}
                    width={80}
                    height={80}
                  />
                </div>
                <div className={styles.features__textGroup}>
                  <h3 className={styles.features__itemTitle}>{feature.title}</h3>
                  <p className={styles.features__text}>{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CtaButton/>
      </div>
    </section>
  );
}
