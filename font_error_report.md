# フォント設定エラーレポート

## 発生事象

`next/font/google` を使用して `Noto_Serif_JP` フォントを設定する際、`subsets` プロパティに `['latin', 'japanese']` を指定したところ、以下のLinterエラー（型エラー）が発生しました。

```
Type '"japanese"' is not assignable to type '"latin"'.
```

該当コード (`src/app/layout.tsx`):

```typescript
import { Noto_Serif_JP } from 'next/font/google';

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin', 'japanese'], // ここで型エラーが発生
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});
```

## 原因分析

このエラーは、`next/font/google` の `Noto_Serif_JP` に関する型定義が、実際には利用可能な `'japanese'` サブセットを認識していないために発生していると考えられます。Google Fontsのドキュメント等では `Noto Serif JP` は日本語サブセットをサポートしていますが、`next/font` パッケージの型情報がこれに追随していない可能性があります。

## 実施した対策

日本語フォントの適用を優先するため、以下の暫定的な対策を講じました。

1.  **`subsets: ['latin']` での一次確認:**
    エラーメッセージに従い、一旦 `subsets: ['latin']` に変更してLinterエラーが解消されることを確認しました。しかし、これでは日本語グリフが含まれないため、日本語テキストにフォントが適用されません。

2.  **`@ts-ignore` コメントによる型エラーの抑制:**
    日本語サブセットを含めるために `subsets: ['latin', 'japanese']` に戻し、型エラーが発生する行の直前に `// @ts-ignore` コメントを挿入しました。

    ```typescript
    const notoSerifJp = Noto_Serif_JP({
      // @ts-ignore TODO: next/fontの型定義が'japanese'サブセットを認識するようになったら削除
      subsets: ['latin', 'japanese'],
      weight: ['400', '700'],
      display: 'swap',
      variable: '--font-noto-serif-jp',
    });
    ```
    これにより、Linterエラーを抑制しつつ、意図したフォント設定（日本語サブセットを含む）を適用することができました。

## 今後の推奨対応

`// @ts-ignore` はあくまで一時的な回避策です。恒久的な対応として、以下のいずれかを検討することを推奨します。

1.  **`next/font` のバージョンアップ:**
    将来的に `next/font` パッケージが更新され、`Noto_Serif_JP` の型定義が修正される可能性があります。定期的にパッケージのバージョンを確認し、アップデートを検討してください。

2.  **型定義ファイルの拡張 (`.d.ts`):**
    プロジェクト内にカスタム型定義ファイルを作成し、`Noto_Serif_JP` の `subsets` 型を拡張することで、`@ts-ignore` を使わずに `'japanese'` を許容するようにできます。
    例 (`next-font.d.ts`など):
    ```typescript
    import 'next/font/google';

    declare module 'next/font/google' {
      export function Noto_Serif_JP(options: {
        // ...他のオプション型...
        subsets?: Array<'latin' | 'japanese' | /* 他の有効なサブセット */>;
        // ...他のオプション型...
      }): any; //戻り値の型も適切に設定
    }
    ```
    この方法は、より型安全なアプローチです。

3.  **Next.js/`next/font` へのIssue確認・報告:**
    Next.jsのGitHubリポジトリで同様のIssueが報告されていないか確認し、なければ報告することも検討できます。

## まとめ

今回のフォント設定変更により、サイト全体に明朝体 (`Noto Serif JP`) が適用される見込みです。Linterエラーについては暫定対応を行いましたが、今後のプロジェクトメンテナンスにおいて、より恒久的な解決策への移行を検討してください。

## 追記: ビルドエラー発生 (next/font error)

### 発生事象 (ビルドエラー)

上記Linterエラー対応として `@ts-ignore` を使用し、`subsets: ['latin', 'japanese']` と設定したところ、開発サーバー起動時に以下のビルドエラーが発生しました。

```
next/font error: Unknown subset `japanese` for font `Noto Serif JP`.
Available subsets: `latin`
```
スクリーンショット:
(ユーザー提供のスクリーンショットを参照)

### 原因分析 (ビルドエラー)

*   `@ts-ignore` はTypeScriptの型チェックレベルでのエラーを抑制するものであり、`next/font` モジュールがビルド時に行うサブセットの妥当性検証を回避するものではありませんでした。
*   `next/font` の `Noto Serif JP` に対する内部的な定義では、利用可能なサブセットとして `'latin'` のみが登録されており、`'japanese'` は認識されていません。

### 実施した対策 (ビルドエラー対応)

1.  **`next/font/google` 設定のコメントアウト:**
    ビルドを正常に通すため、`src/app/layout.tsx` 内の `Noto_Serif_JP` (`next/font/google`) に関する設定（インポート、フォント定義、`<html>` タグへのクラス適用）を一旦全てコメントアウトしました。

2.  **代替案の検討と選択:**
    以下の代替案を検討しました。
    *   `Noto Sans JP` を使用する (ゴシック体への変更)。
    *   **ローカルフォントとして `Noto Serif JP` を使用する (`next/font/local`)。** ← これを選択
    *   従来の `@font-face` を使用する。
    *   `next/font` のIssueを確認し、バージョンアップを待つ。

    明朝体を引き続き使用し、かつ `next/font` の最適化をある程度享受できるため、「ローカルフォントとして `Noto Serif JP` を使用する」方針を選択しました。

### 次のステップ

1.  Google Fonts等から `Noto Serif JP` のフォントファイル (`.woff2` 形式など、必要なウェイト分) をダウンロードします。
2.  ダウンロードしたフォントファイルをプロジェクト内 (例: `src/fonts/`) に配置します。
3.  `src/app/layout.tsx` で `next/font/local` を使用して、これらのローカルフォントファイルを指定し、CSS変数を介してグローバルに適用します。

## フォント選定および配置場所に関する補足

### `Noto Serif JP` の選定理由と既存フォントについて

*   **`Noto Serif JP` を選定した主な理由:** 
    *   Google提供による品質と信頼性、豊富な文字セットとウェイト。
    *   オープンソースで入手・利用が容易。
    *   特定の明朝体の指定がなかったため、汎用性が高く実績のあるフォントとして提案。
*   **既存の明朝体フォントの状況:** プロジェクト内には、これまで意図的に設定された日本語明朝体フォントや関連スタイルは存在していませんでした。CSSではOSデフォルトのフォント（主にゴシック体）が適用される状態でした。

### フォント配置場所の変更理由 (`public/fonts` から `src/fonts` へ)

*   **`next/font/local` の活用:** Next.js 13以降の `next/font/local` モジュールは、フォントの最適化（CLS防止、自己ホスティング等）を提供します。この最適化を最大限に活かすため、フォントファイルはNext.jsのビルドプロセスが認識できる `app` ディレクトリ内（当プロジェクトでは `src` ディレクトリ内、例: `src/fonts/`）に配置することが推奨されます。
*   **従来の `@font-face` と `public` ディレクトリ:** `@font-face` を使う場合、`public` ディレクトリが一般的でしたが、`next/font` の最適化は適用されません。
*   **今回の目的:** `next/font/local` の最適化の恩恵を受けるため、`src/fonts/` にフォントを配置し、そこから読み込む方針としました。

## 実施した対策 (ローカルフォントへの切り替え)

1.  **フォントファイルの配置:**
    ユーザーにより、`Noto Serif JP` の各ウェイトの `.ttf` ファイルが `src/fonts/` ディレクトリに配置されました。
    （例: `src/fonts/NotoSerifJP-Regular.ttf`, `src/fonts/NotoSerifJP-Bold.ttf`）

2.  **`src/app/layout.tsx` の編集:**
    `next/font/local` を使用して、`src/fonts/` に配置されたローカルフォントファイルを指定しました。
    具体的には、`NotoSerifJP-Regular.ttf` (weight: '400') と `NotoSerifJP-Bold.ttf` (weight: '700') を読み込み、CSS変数 `--font-noto-serif-jp` を定義して `<html>` タグに適用しました。

    ```typescript
    // src/app/layout.tsx
    import localFont from 'next/font/local';

    const notoSerifJp = localFont({
      src: [
        {
          path: '../fonts/NotoSerifJP-Regular.ttf', // layout.tsxからの相対パス
          weight: '400',
          style: 'normal',
        },
        {
          path: '../fonts/NotoSerifJP-Bold.ttf',
          weight: '700',
          style: 'normal',
        },
      ],
      display: 'swap',
      variable: '--font-noto-serif-jp',
    });

    // ... (略) ...

    export default function RootLayout({ children }) {
      return (
        <html lang="ja" className={`${notoSerifJp.variable}`}>
          {/* ... */}
        </html>
      );
    }
    ```

3.  **`src/app/globals.css` での適用:**
    `body` タグの `font-family` に `var(--font-noto-serif-jp)` が既に設定されているため、この変更によりローカルフォントが適用されます。

これにより、`next/font/google` で発生したサブセットの問題を回避しつつ、意図した明朝体フォントをサイト全体に適用できる見込みです。

## タイトルのアンダーライン削除

### 発生事象

サイト内の一部のタイトル（例: ホームページの「Engrowthが提供する独自の価値」）の下に、視覚的なアンダーラインが表示されていました。

### 原因分析

このアンダーラインは、共通コンポーネント `src/components/StylishTitle.tsx` の内部で、タイトルテキスト (`<h2>`) の下に絶対配置された `<span>` 要素によって生成されていました。

```typescript
// src/components/StylishTitle.tsx 該当箇所 (修正前)
<h2 className="... relative inline-block">
  {renderHighlightedTitle()}
  <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 transform -translate-y-2"></span>
</h2>
```

### 実施した対策

ユーザーの「全てのアンダーラインを消したい」という要望に基づき、`src/components/StylishTitle.tsx` 内のアンダーラインを生成している `<span>` 要素をコメントアウトしました。

```typescript
// src/components/StylishTitle.tsx 該当箇所 (修正後)
<h2 className="... relative inline-block">
  {renderHighlightedTitle()}
  {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 transform -translate-y-2"></span> */}
</h2>
```

これにより、`StylishTitle` コンポーネントが使用されている全ての箇所で、アンダーラインが表示されなくなりました。

## 「エングロースとは」セクションの追加とカラーテーマ変更

### 実施内容

1.  **トップページへのセクション追加 (`src/app/page.tsx`):**
    *   ヒーローセクションの下に、「エングロースとは」という新しいセクションを追加しました。
    *   内容はタイトル、説明文、および「ビジネス」「学生」「ビジョン」ページへのリンクボタン3つで構成されています。
    *   ボタンには新しいスタイルクラス `new-primary-button` を適用しました。

2.  **カラーテーマの定義 (`tailwind.config.js`):**
    *   ユーザー指定のメインカラー `#d30306` とサブカラー `#6a6a6a` を、それぞれ `main`, `sub` としてTailwind CSSのカラーパレットに追加しました。

    ```javascript
    // tailwind.config.js (抜粋)
    theme: {
      extend: {
        colors: {
          main: '#d30306',
          sub: '#6a6a6a',
        },
        // ...
      },
    },
    ```

3.  **グローバルCSSでのカラーテーマ適用 (`src/app/globals.css`):**
    *   既存の `.primary-button` の背景色を `bg-main` (指定された赤系) に変更しました。
    *   既存の `.secondary-button` のテキスト色を `text-main` に変更しました。
    *   アクティブなタブ (`.tab.active`) の背景色を `bg-main` に変更しました。
    *   新しく追加したセクション用のボタンスタイル `.new-primary-button` を定義し、背景色に `bg-main`、文字色に `text-white` を指定しました。

### 確認事項

*   トップページの新セクションの表示と内容の確認。
*   サイト全体のボタンやアクティブなタブの色が、指定されたメインカラー（赤系）に変更されているかの確認。
*   その他の箇所で意図しない色の変更がないかの確認。
*   サブカラー (`#6a6a6a`) の適用については、現状多くのテキストがデフォルトのグレー系を使用しており、必要に応じて追加調整を検討。

## トップページヒーローセクションの画像スライドショー化

### 実施内容

1.  **`swiper` ライブラリのインストール:**
    *   `npm install swiper` を実行し、スライドショー機能に必要な `swiper` ライブラリをプロジェクトに追加しました。

2.  **`HeroSection.tsx` の改修:**
    *   `swiper/react` から `Swiper`, `SwiperSlide` コンポーネント、`swiper/modules` から `Navigation`, `Pagination`, `Autoplay` モジュールをインポートしました。
    *   SwiperのコアCSSおよびナビゲーション、ページネーション用のCSSをインポートしました。
    *   ヒーローセクションのコンテンツをSwiperコンポーネントに置き換えました。
    *   指定された3枚のGIF画像 (`en_000.gif`, `en_01.gif`, `en_02.gif`) をスライドとして表示するように設定しました。画像は `public/images/` ディレクトリにある前提です。
    *   スライドのオプションとして、ナビゲーションボタン、クリック可能なページネーション、5秒ごとの自動再生、ループ表示を有効にしました。
    *   ヒーローセクションのタイトルとサブタイトルは、スライド画像の上にオーバーレイ表示されるようにしました（半透明の黒背景付き）。
    *   ヒーローセクション全体の高さをレスポンシブに設定しました。

    ```typescript
    // src/components/HeroSection.tsx (主要部分抜粋)
    import Image from 'next/image';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    const images = [
      { src: '/images/en_000.gif', alt: 'Engrowth Slide 1' },
      { src: '/images/en_01.gif', alt: 'Engrowth Slide 2' },
      { src: '/images/en_02.gif', alt: 'Engrowth Slide 3' },
    ];

    export default function HeroSection({ title, subtitle }) {
      return (
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Swiper /* ...options... */ >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 flex flex-col items-center justify-center ...">
            {/* Title and Subtitle */}
          </div>
        </section>
      );
    }
    ```

### 確認事項

*   スライドに使用するGIF画像 (`en_000.gif`, `en_01.gif`, `en_02.gif`) が `public/images/` に正しく配置されているか。
*   ヒーローセクションの高さや、オーバーレイされるテキストのスタイルが適切か。
*   スライドショーが意図通りに動作するか（自動再生、ナビゲーション、ページネーション）。 