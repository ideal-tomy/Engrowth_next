# ViteからNext.jsへの移行手順書

## 1. 事前準備

### 1.1 バックアップの作成
- 現在のプロジェクトの完全なバックアップを作成
- Gitを使用している場合は、新しいブランチを作成

### 1.2 依存関係の確認
現在の主要な依存関係：
- React 19.0.0
- React Router DOM 7.5.2
- TypeScript 5.7.2

## 2. Next.jsプロジェクトのセットアップ

### 2.1 新しいNext.jsプロジェクトの作成
```bash
npx create-next-app@latest engrowth-site-next --typescript --tailwind --eslint
```

### 2.2 推奨バージョン
- Next.js: 14.1.0（安定版）
- React: 18.2.0（Next.jsとの互換性が確認されている最新安定版）
- TypeScript: 5.3.3（Next.jsとの互換性が確認されているバージョン）

## 3. 移行作業

### 3.1 プロジェクト構造の変更
1. `src`ディレクトリの内容を新しいNext.jsプロジェクトに移行
2. 以下の構造に変更：
   ```
   src/
   ├── app/          # 新しいApp Router構造
   ├── components/   # 共通コンポーネント
   ├── styles/       # スタイルファイル
   └── lib/          # ユーティリティ関数
   ```

### 3.2 ルーティングの移行
- React RouterからNext.jsのApp Routerへの移行
- 各ページを`app`ディレクトリ内の対応するディレクトリに移動
- 例：
  - `/about` → `app/about/page.tsx`
  - `/contact` → `app/contact/page.tsx`

### 3.3 コンポーネントの移行
1. クライアントコンポーネントの特定
   - `'use client'`ディレクティブの追加が必要なコンポーネントを特定
   - 状態管理やイベントハンドラを使用しているコンポーネント

2. サーバーコンポーネントの最適化
   - データフェッチングをサーバーコンポーネントに移行
   - `getServerSideProps`の代わりに`async`コンポーネントを使用

### 3.4 スタイリングの移行
- 現在のCSS/SCSSファイルを`app/globals.css`に統合
- Tailwind CSSの設定を`tailwind.config.js`に移行

## 4. 設定ファイルの移行

### 4.1 TypeScript設定
- `tsconfig.json`をNext.js用に更新
- 以下の設定を追加：
  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
        {
          "name": "next"
        }
      ],
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

### 4.2 ESLint設定
- Next.js用のESLint設定に更新
- `next.config.js`の作成

## 5. テストと検証

### 5.1 開発環境でのテスト
1. 開発サーバーの起動
   ```bash
   npm run dev
   ```
2. 各ページの動作確認
3. ルーティングの確認
4. コンポーネントの動作確認

### 5.2 ビルドテスト
1. プロダクションビルド
   ```bash
   npm run build
   ```
2. ビルドエラーの確認と修正
3. 本番環境での動作確認

## 6. 注意点

### 6.1 互換性の問題
- React Routerの機能をNext.jsの機能に置き換え
- クライアントサイドのナビゲーションを`next/link`に移行
- 動的ルーティングの実装方法の変更

### 6.2 パフォーマンス最適化
- 画像の最適化（`next/image`の使用）
- フォントの最適化（`next/font`の使用）
- メタデータの設定（`metadata`オブジェクトの使用）

### 6.3 環境変数
- `.env`ファイルの移行
- Next.jsの環境変数命名規則に従う（`NEXT_PUBLIC_`プレフィックス）

## 7. デプロイ

### 7.1 Vercelへのデプロイ
1. Vercelプロジェクトの作成
2. 環境変数の設定
3. デプロイ設定の確認
4. 本番環境へのデプロイ

### 7.2 ドメイン設定
- カスタムドメインの設定
- SSL証明書の確認

## 8. 移行後の確認事項

1. パフォーマンスの確認
   - Lighthouseスコアの確認
   - Core Web Vitalsの確認

2. SEO対策
   - メタデータの設定
   - サイトマップの生成
   - robots.txtの設定

3. アクセシビリティ
   - WAI-ARIAの実装
   - キーボードナビゲーションの確認

---

この手順書に従って移行を進めることで、安定したNext.jsプロジェクトへの移行が可能です。各ステップで十分なテストを行い、問題が発生した場合は適切に対応することをお勧めします。 