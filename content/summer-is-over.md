---
date:   2016-08-11 23:52:48 +09:00
title:  jekyllを使ってみる
---
あれこれ片付けたい。

- dotfilesの整理
  - [x] aliases/vimrc/zshrcの分割と整理
  - [ ] zshrc見直し
  - [ ] vimrc見直し
  - [ ] tmux見直し
- github pagesの活用
  - [x] ブログ立ち上げ
  - [ ] UI改修

## github pages
開いたら始まるチュートリアル通り。  
https://pages.github.com/

markdownで書いてpushしたら公開できるブログをイメージに[探してみた](https://staticsitegenerators.net/)。
rubyだしjekyllを使ってみる。

- **markdown**  
atomにプレビューできる[プラグイン](https://github.com/atom/markdown-preview)があった。`Ctrl-Shift-M`  
https://guides.github.com/features/mastering-markdown/

- **code sytax highlighting**  
対応一覧  
https://github.com/github/linguist/blob/master/lib/linguist/languages.yml

## zshrc
内容を用途別に分割した。中身の整理まではできなかった。

- **gitignore**  
[救われた](http://qiita.com/anqooqie/items/110957797b3d5280c44f#応用編-ディレクトリの罠)。
ありがとうございます。

## jekyll
[チュートリアル](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)あり。
お試しのつもりだったけど、他を選ぶ理由が明確にならなかった。
`jekyll serve`でプレビューできるけど、厳密に表現されてなさそう？
URLって自動でリンクしてくれるんじゃないの？とか、
はてなみたいにembedしたいとか。今は深く考えない。
