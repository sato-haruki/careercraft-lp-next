import Image from "next/image";
import styles from "./qa.module.scss";
import CtaButton from "@/components/ui/ctaButton";

export default function Qa() {
  const qas = [
    {
        question: "どんなサポート体制がありますか？",
        answer: "チャットでの質問は無制限、定期的な個別フィードバックも受けられます。分からない点をそのままにせず、その日のうちに解決できるような体制を整えています。",
    },
    {
        question: "忙しい社会人でも続けられますか？",
        answer: "はい、オンライン完結・自分のペースで学習できる仕組みなので、仕事の合間や休日に取り組めます。1日30分からの学習でも成果を出している方が多数います。",
    },
    {
        question: "どのくらいの期間でスキルを身につけられますか？",
        answer: "学習のペースによりますが、平均で3〜6か月ほどで実務に活かせるレベルに到達されています。短期間で集中して学習したい方にはカリキュラム調整も可能です。",
    },
  ]

  return (
    <section className={styles.qa} id="qa">
        <div className={styles.qa__heading}>
            <h2 className={styles.qa__heading__text}>よくある質問</h2>
            <div className={styles.qa__heading__decoration}>
                <span className={styles.qa__heading__decoration__text1}>Q</span>
                <span className={styles.qa__heading__decoration__text2}>&</span>
                <span className={styles.qa__heading__decoration__text3}>A</span>
            </div>
        </div>
        <ul className={styles.qa__list}>
            {qas.map((qa, index) => (
            <li className={styles.qa__item} key={index}>
                <div className={styles.qa__item__question}>
                    <span className={styles.qa__item__question__decoration}>Q</span>
                    <h3 className={styles.qa__item__question__text}>{qa.question}</h3>
                </div>
                <div className={styles.qa__item__answer}>
                    <span className={styles.qa__item__answer__decoration}>A</span>
                    <p className={styles.qa__item__answer__text}>{qa.answer}</p>
                </div>
            </li>
            ))}
        </ul>
        <CtaButton/>
    </section>
  );
}
