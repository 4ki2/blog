---
date: 2016-08-20 20:58:58 +09:00
title: jekyll-assets
---
あんまり片付いてない。

- dotfilesの整理
  - [ ] zshrc見直し
  - [ ] vimrc見直し
  - [ ] tmux見直し
- github pagesの活用
  - [x] jekyll見直し
  - [ ] UI改修
- ローカル掃除
  - [ ] gistへ退避

## jekyll-assets
slimの導入を試みたけど、jekyll3は素直に使えなそう。
issueから辿って動かなそうなjekyll3-slimを試したけどやはり動かず。
https://github.com/slim-template/jekyll-slim/issues/4

もやもやしながらmiddlemanとかoctpressとかhugoとか調べつつ、
jekyll-assetsを組み込んでいたら、

こんな記事を見つけて、
https://github.com/blog/2228-simpler-github-pages-publishing

こんな仕様だそうなので、
https://help.github.com/articles/user-organization-and-project-pages/

blogってリポジトリ作ってhugo+aceでやりたいことできそう。
https://gohugo.io/
https://github.com/yosssi/ace

とりあえずjekyll-assets入れたしpushして今日は終わり。

```
[4ki2/4ki2.github.io] Page build failure
The page build failed with the following error:

The tag `asset_path` on line 10 in `_includes/head.html,` is not a recognized Liquid tag. For more information, see https://help.github.com/articles/page-build-failed-unknown-tag-error.
```

あわわ...jekyll-assets除外してcommit。徒労感が。。。
