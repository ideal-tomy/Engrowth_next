# Next.js フォント設定ガイド

Next.js プロジェクトでフォントを効果的に設定するための手順、一般的な問題とその解決策をまとめます。
`next/font` モジュールを利用することで、パフォーマンス最適化（CLSの防止など）、プライバシー向上、使いやすさのメリットが得られます。

## 1. `next/font/google` を使った Google Fonts の設定

Google Fonts を利用する場合、`next/font/google` をインポートして使用します。

```typescript
// app/layout.tsx やフォントを適用したいファイル
import { Inter, Lusitana } from 'next/font/google';

// 基本的な使い方（単一ウェイト）
const inter = Inter({ subsets: ['latin'] });

// 複数ウェイトやスタイルを指定する場合
const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap', // フォント表示戦略 (デフォルトは 'optional')
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.className} ${lusitana.className}`}>
      <body>{children}</body>
    </html>
  );
}
```

**主なオプション:**

*   `subsets`: 使用する文字サブセット (例: `['latin']`, `['latin-ext']`, `['japanese']`)。指定することでファイルサイズを削減できます。
*   `weight`: 文字の太さ (例: `'400'`, `'700'`, `['400', '700']`)。
*   `style`: 文字のスタイル (例: `'normal'`, `'italic'`, `['normal', 'italic']`)。
*   `display`: フォント表示戦略 (`'auto'`, `'block'`, `'swap'`, `'fallback'`, `'optional'`)。
*   `variable`: CSS変数名を設定し、その変数経由でフォントを利用できるようにします。

**CSS変数を使った適用例:**

```typescript
// app/layout.tsx
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp', // CSS変数名を指定
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

```css
/* styles/globals.css など */
body {
  font-family: var(--font-noto-sans-jp), sans-serif;
}

h1 {
  font-family: var(--font-noto-sans-jp);
  font-weight: 700;
}
```

## 2. `next/font/local` を使ったローカルフォントの設定

プロジェクト内に配置したローカルフォントファイルを使用する場合、`next/font/local` をインポートします。

**フォントファイルの配置場所:**

*   `app` ディレクトリ内 (例: `app/fonts/MyCustomFont.woff2`)
*   `public` ディレクトリ内 (例: `public/fonts/MyCustomFont.woff2`) も可能ですが、`next/font` の最適化を最大限に活かすには `app` ディレクトリ内が推奨されます。

```typescript
// app/layout.tsx やフォントを適用したいファイル
import localFont from 'next/font/local';

// 単一ファイルの場合
const myFont = localFont({
  src: './fonts/MyCustomFont-Regular.woff2', // appディレクトリからの相対パス
  display: 'swap',
});

// 複数のウェイトやスタイルを持つフォントの場合
const myVariableFont = localFont({
  src: [
    {
      path: './fonts/MyCustomFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MyCustomFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MyCustomFont-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-my-variable', // CSS変数として利用する場合
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${myFont.className} ${myVariableFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**主なオプション:**

*   `src`: フォントファイルのパス、またはパス、ウェイト、スタイルを含むオブジェクトの配列。
    *   `path`: フォントファイルへのパス。
    *   `weight`: フォントの太さ。
    *   `style`: フォントのスタイル。
*   `variable`: CSS変数名。
*   `display`: フォント表示戦略。
*   `declarations`: `@font-face` 宣言に直接追加するCSSプロパティの配列 (例: `[{ prop: 'font-feature-settings', value: '"liga" 1' }]`)。

## 3. CSS `@font-face` を使った従来の方法 (参考)

`next/font` を使用せず、従来のCSS `@font-face` でフォントを定義することも可能です。この場合、フォントファイルは `public` ディレクトリに配置するのが一般的です。

```css
/* styles/globals.css など */
@font-face {
  font-family: 'MyCustomFontViaCSS';
  src: url('/fonts/MyCustomFont-Regular.woff2') format('woff2'); /* publicディレクトリからの絶対パス */
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* FOUC対策 */
}

body {
  font-family: 'MyCustomFontViaCSS', sans-serif;
}
```
この方法は `next/font` のような自動最適化の恩恵は受けられません。

## 4. 適用方法

### グローバルに適用
サイト全体で共通のフォントを使用する場合、ルートレイアウト (`app/layout.tsx`) でフォントを読み込み、`<html>` または `<body>` タグにクラス名またはCSS変数を適用します。

```typescript
// app/layout.tsx (再掲)
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

### 特定のコンポーネントのみに適用
特定のコンポーネントやページセクションでのみフォントを使い分けたい場合も同様に、該当するJSX要素にクラス名やスタイルを適用します。

```typescript
// components/MyComponent.tsx
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function MyComponent() {
  return (
    <div className={robotoMono.className}>
      <p>This text uses Roboto Mono.</p>
    </div>
  );
}
```

## 5. 想定されるエラーと対策

### フォントファイルが見つからない / 正しく読み込まれない
*   **原因:**
    *   `next/font/local` の `src` で指定したパスが間違っている。
    *   ファイル名の大文字・小文字の区別ミス (特にLinuxベースのデプロイ環境)。
    *   フォントファイルがプロジェクト内の適切な場所に配置されていない。
*   **対策:**
    *   パス指定を再確認します。`src` のパスは `next/font/local` を定義しているファイルからの相対パスです。
    *   ファイル名と拡張子を正確に記述します。
    *   `app` ディレクトリ内にフォントファイルを配置することを推奨します。

### FOUC (Flash Of Unstyled Content) が発生する
*   **原因:** フォントの読み込みが完了する前に、ブラウザが一時的にデフォルトフォントでテキストを表示してしまう現象。
*   **対策:**
    *   `next/font` モジュールは、CLS (Cumulative Layout Shift) を防ぐためにフォント読み込みを最適化しており、FOUCの発生を最小限に抑えます。
    *   `display` オプション (`'swap'`, `'optional'`, `'block'` など) の挙動を理解し、適切に設定します。`'swap'` はFOUCを許容しつつ早期表示を目指し、`'optional'` はすぐに読み込めない場合はフォールバックを使い続けます。
    *   `preload` オプション (デフォルト `true`) が有効になっていることを確認します。

### 指定したウェイトやスタイルが適用されない
*   **原因:**
    *   `next/font/google` や `next/font/local` の設定オブジェクトで、必要な `weight` や `style` を指定・インクルードしていない。
    *   CSSでの `font-weight` や `font-style` の指定が、読み込んだフォントで利用可能なものと一致していない。
    *   CSSのセレクタの詳細度により、意図したスタイルが上書きされている。
*   **対策:**
    *   `next/font` の設定で、使用したい全ての `weight` と `style` を明示的に含めます。
        ```typescript
        // 例: Google Fonts
        const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] });
        // 例: Local Fonts
        const myFont = localFont({
          src: [
            { path: './fonts/Font-Regular.woff2', weight: '400', style: 'normal' },
            { path: './fonts/Font-Bold.woff2', weight: '700', style: 'normal' },
          ],
        });
        ```
    *   CSSでフォントを適用する際に、正しい `font-weight` 値を指定しているか確認します。
    *   ブラウザの開発者ツールで、適用されているCSSルールを確認し、意図しない上書きがないか調べます。

### ビルドエラー
*   **原因:**
    *   `next/font` のインポートパスや関数名のタイポ。
    *   設定オブジェクトの書式間違い (例: `subsets` が配列でない、など)。
    *   対応していないフォント形式 (ただし、`next/font/local` は `.woff`, `.woff2`, `.ttf`, `.otf`, `.eot` をサポート)。
*   **対策:**
    *   Next.jsの公式ドキュメントやエラーメッセージを確認し、構文を修正します。
    *   `next/font` のバージョンが最新であるか確認します。

### 開発環境では表示されるが本番環境では表示されない
*   **原因:**
    *   ローカルフォントファイルのパスが、ビルド後のファイル構造と合致していない。
    *   環境変数などの設定が本番環境で異なり、フォントの読み込みに影響している。
    *   Vercelなどのホスティング環境での特定のビルド設定やキャッシュ。
*   **対策:**
    *   `next/font/local` を使用している場合、フォントファイルがビルド成果物に正しく含まれているか確認します。
    *   本番環境のビルドログやランタイムログを確認し、エラーメッセージがないか調べます。
    *   可能であれば、本番環境に近い状態でローカルビルド (`next build && next start`) を行い、再現テストをします。

## 6. その他・ベストプラクティス

*   **可変フォント (Variable Fonts) の利用:**
    *   単一のフォントファイルで複数のウェイトやスタイルをサポートできるため、パフォーマンス向上に繋がります。`next/font/google` も `next/font/local` も可変フォントに対応しています。
    *   `next/font/local` で可変フォントを使用する場合、`src` に単一の可変フォントファイルを指定し、必要に応じて `axes` オプションで可変フォント軸を設定できます。
*   **フォールバックフォントの指定:**
    *   CSSの `font-family` プロパティで、プライマリフォントの後にカンマ区切りでフォールバックフォント（例: `sans-serif`, `serif`）を指定することは常に重要です。
    *   `next/font` を使用してCSS変数を定義した場合も同様です。
        ```css
        body {
          font-family: var(--font-my-custom), Arial, sans-serif;
        }
        ```
*   **パフォーマンス:**
    *   `next/font` はフォントファイルをインライン化せず、他の静的アセットと同様に配信・キャッシュすることで最適化を図ります。
    *   必要な `subsets`、`weight`、`style` のみを読み込むことで、ダウンロードサイズを最小限に抑えます。
*   **`preload` オプション:**
    *   `next/font` ではフォントの `preload` がデフォルトで有効 (true) になっています。これによりLCP (Largest Contentful Paint) の改善が期待できます。無効にする場合は `preload: false` を設定します。

このガイドがNext.jsでのフォント設定の一助となれば幸いです。 