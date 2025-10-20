# ゼークトの組織論診断サイト / Seeckt's Organization Theory Diagnosis

ゼークトの組織論に基づいた性格診断ツールです。10問の質問に答えて、あなたが「参謀型」「指揮官型」「兵士型」「危険型」のどのタイプに当てはまるかを診断します。

A personality diagnosis tool based on Seeckt's organizational theory. Answer 10 questions to discover whether you are "Staff," "Commander," "Soldier," or "Danger" type.

## 🎯 特徴 / Features

- **10問の質問 / 10 Questions**: シナリオベースの質問で楽しく診断 / Scenario-based questions for engaging diagnosis
- **4つのタイプ / 4 Types**: ゼークトの組織論に基づく分類 / Classification based on Seeckt's organizational theory
- **視覚的な結果 / Visual Results**: マトリクス図であなたの位置を可視化 / Matrix chart visualizing your position
- **SNSシェア / SNS Sharing**: Twitter、LINE、URLコピーに対応 / Support for Twitter, LINE, and URL copying
- **レスポンシブデザイン / Responsive Design**: スマートフォン、タブレット、デスクトップに対応 / Optimized for smartphones, tablets, and desktops
- **多言語対応 / Multi-language Support**: 英語・日本語の切り替えが可能 / Switch between English and Japanese

## 🏗️ 技術スタック / Tech Stack

- **React 18** - UIライブラリ / UI Library
- **TypeScript** - 型安全性 / Type Safety
- **Vite** - 高速ビルドツール / Fast Build Tool
- **Tailwind CSS** - スタイリング / Styling
- **Canvas API** - マトリクス図の描画 / Matrix Chart Rendering
- **React Context** - 多言語対応 / Multi-language Support

## 📦 セットアップ

### 必要な環境

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# ビルドしたファイルのプレビュー
npm run preview
```

## 📂 プロジェクト構造

```
src/
├── components/         # 再利用可能なコンポーネント
│   ├── MatrixChart.tsx    # マトリクス図
│   ├── ProgressBar.tsx    # プログレスバー
│   └── ShareButtons.tsx   # SNSシェアボタン
├── data/              # データファイル
│   ├── questions.ts      # 質問データ
│   └── results.ts        # 結果データ
├── pages/             # ページコンポーネント
│   ├── TopPage.tsx       # トップページ
│   ├── QuestionPage.tsx  # 質問ページ
│   └── ResultPage.tsx    # 結果ページ
├── types/             # TypeScript型定義
│   └── index.ts
├── utils/             # ユーティリティ関数
│   └── scoring.ts        # スコアリングロジック
├── App.tsx            # メインアプリケーション
├── main.tsx           # エントリーポイント
└── index.css          # グローバルスタイル
```

## 🎨 4つのタイプ

### 参謀型（有能 × 働き者）
優秀で行動力がある、組織にとって最も価値のある人材タイプ。

### 指揮官型（有能 × 怠け者）
効率重視で本質を見抜く、戦略的な意思決定に適したタイプ。

### 兵士型（無能 × 怠け者）
指示に従い、安定した成果を出す、組織の基盤を支えるタイプ。

### 危険型（無能 × 働き者）
行動力はあるが方向性に問題がある、適切なガイダンスが必要なタイプ。

## 🚀 デプロイ

このプロジェクトは静的サイトとして動作するため、以下のサービスで簡単にデプロイできます：

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### Vercelへのデプロイ例

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

ハンス・フォン・ゼークトの組織論に基づいています。


