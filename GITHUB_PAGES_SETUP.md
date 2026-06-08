# GitHub Pages 公開準備メモ

このブランチは、Vercel で公開中のサイトを維持したまま、同じ静的サイトを GitHub Pages でも公開できるようにするための準備用です。

## 想定する公開URL

GitHub Pages を `KITNAMALAB/LABSITE` リポジトリから公開する場合、通常は以下のURLになります。

https://kitnamalab.github.io/LABSITE/

## 現在の方針

- Vercel の公開版 `https://labsite-roan.vercel.app` はそのまま維持する。
- GitHub Pages は、最終確認が終わるまで有効化しない。
- GitHub Pages 公開時も、サイト本体は静的な `index.html` / `styles.css` / `assets/` をそのまま使う。
- GitHub Pages で Jekyll 処理が入らないように `.nojekyll` を置く。

## 公開直前の確認

ローカルで以下を確認します。

1. `index.html` をブラウザで開いてトップページを確認する。
2. `report-1.html` を開いて活動報告ページを確認する。
3. `speaker-profile.html` を開いて講師プロフィールを確認する。
4. ページ内の画像、PDFリンク、外部リンクが動くことを確認する。

## GitHub Pages を公開する手順

GitHub 上で最後に公開するときは、以下の設定にします。

1. GitHub の `KITNAMALAB/LABSITE` リポジトリを開く。
2. `Settings` を開く。
3. 左メニューの `Pages` を開く。
4. `Build and deployment` の `Source` を `Deploy from a branch` にする。
5. `Branch` を `main`、フォルダを `/ (root)` にする。
6. `Save` を押す。
7. 数十秒から数分待ち、表示された GitHub Pages URL を開いて確認する。

## 注意

GitHub Free の場合、公開リポジトリからの GitHub Pages 公開が基本です。プライベートリポジトリから Pages を使うには、有料プランが必要になる場合があります。
