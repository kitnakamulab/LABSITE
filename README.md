# LABSITE Online Session

金沢工業大学 先進再生医療工学講座による「第2回 再生医療工学を語るオンラインセッション」の静的サイトです。

## ローカル確認

`index.html` をブラウザで開くと確認できます。

## Vercel デプロイ

このリポジトリを GitHub に push して、Vercel で Import Project すると公開できます。

- Framework Preset: `Other`
- Build Command: 空欄
- Output Directory: `.`

現在の申し込み先は以下です。

https://forms.gle/WqUG5dZGxbhg8suC7

## iPad / iPhone から修正する流れ

1. ChatGPT に GitHub リポジトリ `https://github.com/KITNAMALAB/LABSITE` を伝えて、修正内容を依頼します。
2. 修正後、GitHub に commit / push します。
3. Vercel と GitHub を連携している場合は、自動で公開サイトに反映されます。
4. 手動デプロイする場合は、PC で `vercel deploy --prod` を実行します。

公開URL:

https://labsite-roan.vercel.app
