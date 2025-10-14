import Image from "next/image";
import styles from "./voice.module.scss";

export default function Voice() {
  const voices = [
    {
        course: "デザインコース受講生",
        image: "/images/voice-img-1.png",
        title: "学んだスキルで副業を開始し、月10万円以上を安定的に稼げるようになりました",
        text: "基礎から実践まで段階的に学べるカリキュラムと丁寧なフィードバックのおかげで、未経験でもスキルを身につけることができました。制作物をポートフォリオに活かし、副業案件を獲得。今では安定して月10万円以上の収益を得ています。",
        detail: "会社員 20代 女性",
        color: "#ff8c21",
    },
    {
        course: "プログラミングコース受講生",
        image: "/images/voice-img-2.png",
        title: "未経験から本業に直結、社内プロジェクトで成果を出し昇給につながりました",
        text: "質問しやすい環境と実践的な課題により、確実にスキルを習得できました。学んだ知識を社内のシステム改善に活かした結果、業務効率化を実現し、上司から評価を受け昇給にもつながりました。",
        detail: "会社員 30代 男性",
        color: "#1265ad",
    },
    {
        course: "マーケティングコース受講生",
        image: "/images/voice-img-3.png",
        title: "マーケティング知識を活かし、売上120％UPを実現できました",
        text: "理論だけでなく実際のツール操作を学べたため、すぐに社内施策に応用できました。サイト訪問者数が増え、半年で売上120％UPを達成。学んだことをそのまま成果に結びつけられました。",
        detail: "会社員 40代 女性",
        color: "#fe5ab3",
    },
  ]

  return (
    <section className={styles.voice} id="voice">
        <div className={styles.voice__heading}>
            <Image
                className={styles.voice__heading__image}
                src={"/images/woman-voice.png"}
                alt=""
                width={155}
                height={166}
            />
            <div className={styles.voice__heading__contents}>
                <Image
                    className={styles.voice__heading__contents__image1}
                    src={"/images/woman-voice-line1.svg"}
                    alt=""
                    width={306}
                    height={46}
                />
                <h2 className={styles.voice__heading__contents__text}>
                    受講生の
                    <span className={styles.voice__heading__contents__decoration}>声</span>
                </h2>
                <Image
                    className={styles.voice__heading__contents__image2}
                    src={"/images/woman-voice-line2.svg"}
                    alt=""
                    width={306}
                    height={46}
                />
            </div>
        </div>
        <div className={styles.voice__list}>
            {voices.map((voice, index) => (
                <div className={styles.voice__item} key={index}>
                    <p className={styles.voice__item__course} style={{ backgroundColor: voice.color }}>{voice.course}</p>
                    <div className={styles.voice__item__title}>
                        <Image
                            className={styles.voice__item__title__image}
                            src={voice.image}
                            alt=""
                            width={74}
                            height={74}
                        />
                        <p className={styles.voice__item__title__text}>{voice.title}</p>
                    </div>
                    <p className={styles.voice__item__text}>{voice.text}</p>
                    <p className={styles.voice__item__detail}>{voice.detail}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
