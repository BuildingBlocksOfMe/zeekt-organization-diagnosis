# Hostingerへのデプロイ手順

このドキュメントでは、ゼークトの組織論診断サイトをHostingerにデプロイする手順を説明します。

## 📋 前提条件

- Hostingerの有料プラン（Web Hosting以上）
- FTPアクセス情報（ホスト名、ユーザー名、パスワード）

## 🚀 デプロイ手順

### 方法1: File Managerを使用（推奨）

1. **Hostingerのコントロールパネルにログイン**
   - https://hpanel.hostinger.com にアクセス

2. **File Managerを開く**
   - 左メニューから「File Manager」を選択
   - または「ウェブサイト」→「ファイル」→「File Manager」

3. **public_htmlフォルダに移動**
   - ルートディレクトリから `public_html` フォルダを開く
   - 既存のファイルがあれば削除（index.htmlなど）

4. **ビルドファイルをアップロード**
   - ローカルの `dist` フォルダ内のすべてのファイルを選択
   - File Managerの「Upload」ボタンをクリック
   - 以下のファイルをアップロード：
     - `index.html`
     - `.htaccess`
     - `assets` フォルダ（CSS、JSファイルが入っています）

5. **パーミッションの確認**
   - `index.html` のパーミッションを `644` に設定
   - `.htaccess` のパーミッションを `644` に設定
   - フォルダのパーミッションは `755` に設定

6. **動作確認**
   - ブラウザで `https://あなたのドメイン.com` にアクセス
   - サイトが正しく表示されるか確認

### 方法2: FTPクライアントを使用（FileZilla等）

1. **FileZillaをダウンロード**（未インストールの場合）
   - https://filezilla-project.org/

2. **FTP接続情報を取得**
   - Hostingerのコントロールパネル → 「FTP Accounts」
   - ホスト名、ユーザー名、パスワードをメモ

3. **FileZillaで接続**
   - ホスト: `ftp.あなたのドメイン.com`
   - ユーザー名: FTPユーザー名
   - パスワード: FTPパスワード
   - ポート: 21
   - 「クイック接続」をクリック

4. **ファイルをアップロード**
   - 左側（ローカル）: プロジェクトの `dist` フォルダを開く
   - 右側（リモート）: `public_html` フォルダを開く
   - `dist` フォルダ内のすべてのファイルを右側にドラッグ＆ドロップ

5. **動作確認**
   - ブラウザでドメインにアクセスして確認

### 方法3: SSH/Git経由でデプロイ（上級者向け）

HostingerのプランによってはSSHアクセスが可能です：

```bash
# SSHで接続
ssh ユーザー名@ホスト名

# public_htmlに移動
cd public_html

# 既存ファイルを削除
rm -rf *

# GitHubからクローン
git clone https://github.com/BuildingBlocksOfMe/zeekt-organization-diagnosis.git temp

# distフォルダの内容をコピー
cd temp
npm install
npm run build
cp -r dist/* ../
cd ..
rm -rf temp
```

## 📁 アップロードするファイル

`dist` フォルダ内の以下のファイルをすべてアップロード：

```
dist/
├── index.html          # メインHTMLファイル
├── .htaccess          # Apache設定ファイル（SPA用）
└── assets/            # CSS、JSファイル
    ├── index-CIMN2Rkt.css
    └── index-C4Ko-vop.js
```

## ⚙️ 重要な設定

### .htaccessファイル

このファイルにより、以下が実現されます：
- SPAのルーティングが正しく動作
- Gzip圧縮でページ読み込み高速化
- 静的ファイルのキャッシュ設定

### サブディレクトリにデプロイする場合

ルートではなく、`https://あなたのドメイン.com/diagnosis/` のようなサブディレクトリにデプロイする場合：

1. `vite.config.ts` に `base` を追加：

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/diagnosis/',  // サブディレクトリのパス
})
```

2. 再ビルド：

```bash
npm run build
```

3. `public_html/diagnosis/` フォルダにアップロード

## 🔧 トラブルシューティング

### ページが表示されない
- `.htaccess` ファイルがアップロードされているか確認
- `index.html` のパーミッションを確認（644）
- ブラウザのキャッシュをクリア

### CSSが適用されない
- `assets` フォルダがアップロードされているか確認
- ブラウザの開発者ツールでエラーを確認

### 404エラーが出る
- `.htaccess` の設定を確認
- Apache mod_rewrite が有効か確認（通常は有効）

### パフォーマンスが遅い
- Gzip圧縮が有効か確認
- キャッシュ設定を確認
- Hostingerの「Website Acceleration」を有効化

## 🔄 更新する場合

コードを更新した後：

1. ローカルで再ビルド：
```bash
npm run build
```

2. `dist` フォルダの内容をHostingerの `public_html` に再アップロード

3. ブラウザのキャッシュをクリアして確認

## 📊 推奨設定

### Hostingerのコントロールパネルで設定推奨：

1. **SSL証明書**
   - 「SSL」→ 無料SSL証明書をインストール
   - HTTPSリダイレクトを有効化

2. **Website Acceleration**
   - LiteSpeed Cache を有効化
   - 画像最適化を有効化

3. **PHP設定**
   - 特に変更不要（このサイトはPHPを使用しません）

## 🌐 完成

デプロイが完了したら、以下でアクセスできます：
- `https://あなたのドメイン.com`

お疲れさまでした！🎉

