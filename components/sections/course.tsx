"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./course.module.scss";

type CourseType = {
  courseName: string;
  color: string;
  gradient: string; // 追加：heading用グラデーション
  title: string;
  price: string;
  features: string[];
  demoImage: string;
  iconImage: string;
};

export default function Course() {
  const coursesSelect: CourseType[] = [
    {
      courseName: "Web制作コース",
      color: "#009ce9",
      gradient: "linear-gradient(90deg, #009ce9 0%, #80d4ff 100%)",
      title: "コーディングスキルを身に付けたい方におすすめ",
      price: "129,800",
      features: [
        "HTML・CSS・JavaScriptによるコーディング",
        "PHPを用いたWordPressカスタマイズ",
        "副業・転職に十分なスキルが身につきます",
      ],
      demoImage: "/images/demo-site.png",
      iconImage: "/images/web-site.png",
    },
    {
      courseName: "デザインコース",
      color: "#ff8c21",
      gradient: "linear-gradient(90deg, #ff8c21 0%, #ffc68f 100%)",
      title: "デザインスキルを身に付けたい方におすすめ",
      price: "119,800",
      features: [
        "Photoshop・Illustratorを使用したデザイン",
        "WebサイトやLPデザイン制作演習",
        "副業・転職に活かせるスキルが習得可能",
      ],
      demoImage: "/images/design-img.png",
      iconImage: "/images/design.png",
    },
    {
      courseName: "AIライティングコース",
      color: "#12ad12",
      gradient: "linear-gradient(90deg, #12ad12 0%, #a0e0a0 100%)",
      title: "AIを活用した文章作成スキルを学びたい方におすすめ",
      price: "79,800",
      features: [
        "AIツールを用いた効率的な文章作成",
        "ブログやLPのコピーライティング演習",
        "副業や業務改善に役立つスキル習得",
      ],
      demoImage: "/images/writting-img.png",
      iconImage: "/images/writting.png",
    },
    {
      courseName: "マーケティングコース",
      color: "#fe5ab3",
      gradient: "linear-gradient(90deg, #fe5ab3 0%, #ffc0e0 100%)",
      title: "マーケティング戦略を学びたい方におすすめ",
      price: "99,800",
      features: [
        "SNSマーケティングや広告運用",
        "分析・改善のフレームワークを習得",
        "副業・転職に活かせるスキルが学べる",
      ],
      demoImage: "/images/marketing-img.png",
      iconImage: "/images/marketing.png",
    },
    {
      courseName: "動画編集コース",
      color: "#fb4a4d",
      gradient: "linear-gradient(90deg, #fb4a4d 0%, #ffb0b2 100%)",
      title: "動画編集スキルを身に付けたい方におすすめ",
      price: "89,800",
      features: [
        "Premiere Pro・After Effectsを使用",
        "YouTube動画や広告動画制作演習",
        "副業・転職に活かせる動画スキル習得",
      ],
      demoImage: "/images/video-img.png",
      iconImage: "/images/video.png",
    },
    {
      courseName: "プログラミングコース",
      color: "#1265ad",
      gradient: "linear-gradient(90deg, #1265ad 0%, #85b0e0 100%)",
      title: "プログラミングスキルを学びたい方におすすめ",
      price: "139,800",
      features: [
        "JavaScript・Pythonを用いた開発演習",
        "Webアプリやツール制作を体験",
        "副業・転職に活かせる実践スキル習得",
      ],
      demoImage: "/images/programming-img.png",
      iconImage: "/images/pc.png",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedCourse = coursesSelect[selectedIndex];

  return (
    <section className={styles.course}>
      <h2 className={styles.course__heading}>コース紹介＆料金</h2>

      {/* コース選択ボタン */}
      <div className={styles.course__select}>
        <ul className={styles.course__list}>
          {coursesSelect.map((course, index) => (
            <li className={styles.course__item} key={index}>
              <button
                className={`${styles.course__item__btn} ${
                  selectedIndex === index ? styles.active : ""
                }`}
                style={{ "--btn-color": course.color } as React.CSSProperties}
                onClick={() => setSelectedIndex(index)}
              >
                <span>{course.courseName}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 選択中のコース内容 */}
      <div className={styles.course__contents}>
        <ul className={styles.course__contents__list}>
          <li className={styles.course__contents__item}>
            <div
              className={styles.course__contents__item__heading}
              style={{ background: selectedCourse.gradient }} // ✅ グラデーション適用
            >
              <p>{selectedCourse.title}</p>
            </div>
            <div className={styles.course__contents__item__group}>
              <div className={styles.course__detail}>
                <div className={styles.course__detail__icon}>
                  <Image
                    className={styles.course__detail__icon__image}
                    src={selectedCourse.iconImage}
                    alt=""
                    width={47}
                    height={47}
                  />
                </div>
                <div className={styles.course__detail__text}>
                  <p className={styles.course__detail__text__title}>{selectedCourse.courseName}</p>
                  <p className={styles.course__detail__text__price}>
                    ￥<span>{selectedCourse.price}</span>（税込）
                  </p>
                </div>
              </div>
              <ul className={styles.course__content__list}>
                {selectedCourse.features.map((feature, idx) => (
                  <li className={styles.course__content__item} key={idx}>
                    <span
                      className={styles.course__content__item__decoration}
                      style={{ "--btn-color": selectedCourse.color } as React.CSSProperties}
                    >
                      <Image
                        className={styles.course__content__item__decoration__image}
                        src="/images/check.png"
                        alt=""
                        width={10}
                        height={10}
                      />
                    </span>
                    <p className={styles.course__content__item__text}>{feature}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.course__demo}>
                <Image
                  className={styles.course__demo__image}
                  src={selectedCourse.demoImage}
                  alt=""
                  width={459}
                  height={414}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
