# フォント設定

## 推奨される設定方法（Next.js 13以降）

### 1. フォントの定義（src/fonts.ts）
```ts
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

export const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'japanese'],
  variable: '--font-sans',
});

export const notoSerif = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin', 'japanese'],
  variable: '--font-serif',
});
```

### 2. アプリケーションへの適用（src/app/layout.tsx）
```tsx
import { notoSans, notoSerif } from '../fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 3. Tailwind設定（tailwind.config.js）
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
}
```

### 4. グローバルCSS（src/styles/globals.css）
```css
/* フォント読み込みは next/font が自動で行うため、@import は不要 */
body {
  margin: 0;
  padding: 0;
}
```

## 現在の設定（移行前）

### 使用フォント
- 見出し（h1, h2, h3等）: `Noto Serif JP`
- 本文（body, p, li等）: `Noto Sans JP`

### フォントウェイト
- Noto Sans JP: 400, 500, 700
- Noto Serif JP: 400, 700

### 設定場所
1. `tailwind.config.js`
```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      serif: ['Noto Serif JP', 'serif'],
    },
  },
}
```

2. `src/styles/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap');

body, p, li, button, input, textarea {
  font-family: 'Noto Sans JP', sans-serif !important;
}

h1, h2, h3, .hero-title, .section-title, .stylish-title, .card-title {
  font-family: 'Noto Serif JP', serif !important;
  font-weight: 700;
  letter-spacing: 0.04em;
}
```

3. `src/pages/_document.tsx`
```tsx
<Head>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
</Head>
```

## 変更履歴と課題

### 2024年3月: ViteからNext.jsへの移行
1. フォント読み込みの移行
   - 修正内容: `index.html`から`_document.tsx`への移動
   - 理由: Next.jsでは`_document.tsx`がHTMLドキュメントのカスタマイズに推奨される場所
   - 結果: 成功

2. スタイル定義の移行
   - 修正内容: `src_vite/styles/global.css`から`src/styles/globals.css`への移動
   - 理由: Next.jsの規約に従い、グローバルスタイルを`globals.css`に配置
   - 結果: 成功

3. Tailwind設定の移行
   - 修正内容: `tailwind.config.js`の更新
   - 理由: Next.jsプロジェクトでのTailwind設定に合わせる
   - 結果: 成功

### 未解決の課題
1. フォントの重複読み込み
   - 問題: `globals.css`と`_document.tsx`の両方でフォントを読み込んでいる
   - 影響: パフォーマンスへの若干の影響
   - 解決策: `next/font`を使用して最適化

2. フォントの適用順序
   - 問題: `!important`の使用が多すぎる
   - 影響: スタイルの上書きが困難になる可能性
   - 解決策: CSS変数を使用した`next/font`の実装に移行

3. フォントの最適化
   - 問題: すべてのウェイトを読み込んでいる
   - 影響: 不要なウェイトの読み込みによるパフォーマンス低下
   - 解決策: `next/font`の自動最適化機能を活用

## 移行手順
1. `src/fonts.ts`の作成
   - `next/font/google`からフォントをインポート
   - 必要なウェイトとサブセットを指定
   - CSS変数名を設定

2. `src/app/layout.tsx`の更新
   - フォント変数をHTML要素に適用
   - 不要な`<link>`タグを削除

3. `tailwind.config.js`の更新
   - フォントファミリーの設定をCSS変数を使用する形に変更

4. `globals.css`のクリーンアップ
   - フォントの`@import`を削除
   - 不要な`!important`を削除
   - フォント指定をTailwindのユーティリティクラスに移行

## 注意事項
1. `next/font`を使用することで、以下の最適化が自動的に行われる：
   - フォントのプリロード
   - 不要なウェイトの除外
   - CSS変数による一貫した適用
   - パフォーマンスの最適化

2. 移行後の確認ポイント：
   - フォントが正しく読み込まれているか
   - スタイルの適用が意図通りか
   - パフォーマンスの改善が確認できるか

3. 移行時の注意点：
   - 段階的な移行を推奨
   - 各ページでのフォント表示を確認
   - パフォーマンスの計測 