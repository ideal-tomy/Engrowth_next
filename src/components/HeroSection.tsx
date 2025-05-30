"use client"; // Next.js App Router を使用している場合

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiperの基本CSSと必要なモジュールのCSSをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // フェードエフェクトを使用する場合

// スタイル用のCSSモジュールをインポート
import styles from './HeroSection.module.css';

const slideImages = [
  { src: '/images/en_000.gif', alt: 'スライド画像1', title: '最先端の学習メソッド', subtitle: 'あなたの可能性を最大限に引き出す' },
  { src: '/images/en_01.gif', alt: 'スライド画像2', title: '経験豊富なメンター陣', subtitle: '目標達成まで徹底サポート' },
  { src: '/images/en_02.gif', alt: 'スライド画像3', title: 'グローバルなコミュニティ', subtitle: '世界中の仲間と共に成長' },
];

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0} // スライド間のスペース
        slidesPerView={1} // 表示するスライドの数
        navigation // ナビゲーションボタン（左右の矢印）
        pagination={{ clickable: true }} // ページネーション（ドットインジケーター）
        loop={true} // ループ再生
        autoplay={{
          delay: 5000, // 自動再生の間隔 (ミリ秒)
          disableOnInteraction: false, // ユーザー操作後に自動再生を止めない
        }}
        effect="fade" // スライドアニメーションの種類 (例: 'slide', 'fade', 'cube', 'coverflow', 'flip')
        fadeEffect={{
          crossFade: true
        }}
        className={styles.swiperContainer}
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className={styles.slideContent}>
              <h1 className={styles.slideTitle}>{image.title}</h1>
              <p className={styles.slideSubtitle}>{image.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
