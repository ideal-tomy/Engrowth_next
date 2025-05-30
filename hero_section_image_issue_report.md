# ヒーローセクション画像表示問題 詳細レポート

## 1. 問題の概要

Next.js (appディレクトリ構成) で作成中のウェブサイトのトップページ、ヒーローセクションにおいて、`swiper` を用いた画像スライドショーの画像が表示されません。Swiperコンポーネント自体はマウントされるものの、その内部に必要な `swiper-wrapper` や `swiper-slide` といった構造がDOMに生成されず、結果としてスライドコンテンツ（画像など）が表示されません。

## 2. 発生しているエラー (過去ログと現状)

当初、`next/image` コンポーネントに関するレガシープロパティの警告と、ハイドレーションエラーが発生していました。これらは `next/image` のプロパティ修正とクライアントサイドでのSwiperレンダリング（`isMounted` フラグ使用）によって解消されました。

現在は、画像やSwiperの内部構造が表示されない問題に直面しており、コンソールに直接的なエラーメッセージは出ていない状況です（Fast Refreshによる `next/image` 関連の警告は、`<img>` タグ使用への切り替えと `Image` のimportコメントアウトで解消）。

## 3. これまでの主な修正と結果

### 3.1. `next/image` プロパティの修正

*   **内容:** `layout="fill"` を `fill` に、`objectFit="cover"` を `className="object-cover"` に変更。
*   **結果:** `next/image` の警告解消。画像表示されず、ハイドレーションエラー発生。

### 3.2. ハイドレーションエラーへの対応 (クライアントサイドレンダリング)

*   **内容:** `isMounted` stateと `useEffect` でSwiperをクライアントマウント後に描画。
*   **結果:** ハイドレーションエラー解消。依然として画像は表示されず。

### 3.3. 単純な構成での画像表示テスト (Swiperなし)

*   **内容:** `HeroSection.tsx` からSwiper関連コードを一時的に全て削除し、単一の `<Image src="/images/en_000.gif" width={500} height={300} />` で表示テスト。
*   **結果:** **画像は正常に表示された。** これにより、画像パスや `next/image` の基本的な動作には問題がないことを確認。

### 3.4. SwiperSlide内での通常の `<img>` タグ使用

*   **内容:** Swiperの構造は元に戻し、`SwiperSlide` 内で `<Image fill className="object-cover" />` の代わりに `<img src={image.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />` を使用。
*   **結果:** 画像は表示されず。`div.swiper` の子要素として `swiper-wrapper` や `swiper-slide` がDOMに生成されていないことを確認。ネットワークタブでは画像リソースはステータスコード304 (Not Modified) または 200 (OK) で取得できている。

### 3.5. Swiper CSSインポートの最小化

*   **内容:** `HeroSection.tsx` でのCSSインポートを `import 'swiper/css';` のみとし、`navigation`, `pagination`, およびカスタムCSS (`../styles/components.css`) のインポートをコメントアウト。
*   **結果:** 状況変わらず。DOMに `swiper-wrapper` や `swiper-slide` は生成されない。

### 3.6. Swiperオプションの最小化

*   **内容:** `Swiper` コンポーネントから `modules`, `navigation`, `pagination`, `loop`, `autoplay` といったオプションを全て削除（またはコメントアウト）。CSSインポートはコアCSS (`swiper/css`) のみのまま。
*   **結果:** 状況変わらず。DOMに `swiper-wrapper` や `swiper-slide` は生成されない。開発者ツールで確認した `div.swiper` 要素自体は存在するものの、その内部が空の状態。

## 4. 現在の `HeroSection.tsx` のコード (オプション最小化版)

```typescript
'use client';

import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 

import 'swiper/css'; // コアCSSのみ
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../styles/components.css'; 

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const images = [
  { src: '/images/en_000.gif', alt: 'Engrowth Slide 1' },
  { src: '/images/en_01.gif', alt: 'Engrowth Slide 2' },
  { src: '/images/en_02.gif', alt: 'Engrowth Slide 3' },
];

export default function HeroSection({
  title,
  subtitle,
}: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]"> 
      {isMounted ? (
        <Swiper
          // modules prop自体をコメントアウト
          // modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0} 
          slidesPerView={1} 
          // navigation propをコメントアウト
          // navigation
          // pagination propをコメントアウト
          // pagination={{ clickable: true }}
          // loop propをコメントアウト
          // loop={true}
          // autoplay propをコメントアウト
          // autoplay={{
          //   delay: 5000, 
          //   disableOnInteraction: false,
          // }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <img 
                src={image.src} 
                alt={image.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-500">Loading Slideshow...</p>
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black bg-opacity-30 p-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-white">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
```

## 5. 考えられる原因の考察 (更新)

*   **Swiper Reactコンポーネントのレンダリング不備:**
    *   `Swiper` または `SwiperSlide` コンポーネントが、children（この場合は `images.map(...)` から返される `SwiperSlide` やその中の `<img>`）を正しく処理し、DOMにレンダリングできていない可能性が最も高い。
    *   SwiperのコアロジックがReactのコンポーネントライフサイクルやNext.jsの環境 (特にapp router) と何らかの非互換性や衝突を起こしている。
*   **プロジェクト全体の依存関係や設定:**
    *   `package.json` に記載のSwiperのバージョンと、React/Next.jsのバージョン間の互換性問題。
    *   他のグローバルなJavaScriptコードやポリフィル、あるいはNext.jsの特定のカスタム設定が影響している可能性（低いとは思うが除外はできない）。
*   **CSSの潜在的な影響 (低い可能性):**
    *   コアCSS (`swiper/css`) のみが適用されている状態で `swiper-wrapper` が生成されないため、CSSが直接の原因である可能性は低い。しかし、SwiperがDOM構造を生成する際に何らかのCSSプロパティを参照し、それが期待通りでない場合に処理を中断する、といった非常に稀なケースも考えられなくはない。

## 6. 今後の調査方針案 (更新)

これまでの調査で、SwiperのReactコンポーネントがスライドのDOM構造を生成できていない点が明確になりました。ここからは、Swiper自体の動作とプロジェクト環境との適合性に焦点を当てます。

1.  **Swiperのバージョン確認と関連Issue調査:**
    *   `package.json` を確認し、インストールされている `swiper` のバージョンを特定します。
    *   特定したバージョンと「Next.js app router not rendering slides」などのキーワードで、GitHub IssuesやStack Overflowを検索し、同様の問題が報告されていないか確認します。

2.  **Swiperインスタンスの手動生成テスト (上級):**
    *   `useEffect` 内で、Reactコンポーネント (`<Swiper>`) を使う代わりに、SwiperのコアJSライブラリを直接使ってDOM要素にSwiperインスタンスを初期化してみる。これにより、Reactラッパーの問題か、Swiperコアの問題かを切り分けられる可能性があります。(これは最終手段に近い)

3.  **最小限の別プロジェクトでの再現テスト:**
    *   `create-next-app` で新しいNext.jsプロジェクト（app router）を作成し、そこに現在の `HeroSection.tsx` と同じ構成（画像ファイル、Swiperのインストールと基本的なコード）だけを移植して、問題が再現するか確認します。もし新しいプロジェクトでは問題なく動作する場合、現在のプロジェクト特有の設定や他のコードとの干渉が原因である可能性が高まります。

4.  **`HeroSection.tsx` の外部でのSwiperテスト:**
    *   `src/app/page.tsx` など、よりルートに近いコンポーネントで、非常にシンプルなSwiper（数個の `div` をスライドにするだけなど）が動作するかテストしてみる。これで、`HeroSection` コンポーネント特有の問題かどうかの切り分けができます。

まずは **調査方針案 6.1 (Swiperバージョン確認とIssue調査)** と **6.4 (`HeroSection.tsx` の外部でのSwiperテスト)** から進めるのが現実的かと思われます。 