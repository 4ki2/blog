(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{543:function(e,t,r){"use strict";r.r(t);var o=r(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("ソースコードの説明がないのはいいとして、\nテストコードや資料もほぼなくポンと渡されたタスク。\nまずは"),r("code",[e._v("ecs-cli")]),e._v("したけど、実際はインフラ構築とDockerfileの調整だった。")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("httpd:alpine")]),e._v("はwebdav(mod_dav)で、"),r("a",{attrs:{href:"https://github.com/s3ql/s3ql",target:"_blank",rel:"noopener noreferrer"}},[e._v("s3ql"),r("OutboundLink")],1),e._v("っていう暗号化ファイルシステムでS3をマウントしてる")]),e._v(" "),r("li",[r("code",[e._v("mongo:latest")]),e._v("はAPIのキャッシュで使われてる")]),e._v(" "),r("li",[r("code",[e._v("ubuntu:16")]),e._v("で動くpythonのAPI("),r("a",{attrs:{href:"https://github.com/pallets/flask",target:"_blank",rel:"noopener noreferrer"}},[e._v("flask"),r("OutboundLink")],1),e._v(")は、外部サービスのレスポンスをmongoでキャッシュしてdynamodbにキャッシュしてwebdavにファイル作ってる")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/iron-io/dockers/tree/master/go",target:"_blank",rel:"noopener noreferrer"}},[e._v("iron/go"),r("OutboundLink")],1),e._v("っていうイメージで動くgoのAPI(httprouter以外は標準パッケージ)は、csv作ってwebdavにファイル作ってる")]),e._v(" "),r("li",[r("code",[e._v("node")]),e._v("で動くjsのAPI("),r("a",{attrs:{href:"https://github.com/balderdashy/sails",target:"_blank",rel:"noopener noreferrer"}},[e._v("sales"),r("OutboundLink")],1),e._v("+"),r("a",{attrs:{href:"https://github.com/gruntjs/grunt",target:"_blank",rel:"noopener noreferrer"}},[e._v("grunt"),r("OutboundLink")],1),e._v(")は、ec2の別のAPIへプロキシしてる")])]),e._v(" "),r("p",[e._v("それ以外に"),r("code",[e._v("alpine:latest")]),e._v("で動く、認証用のgoのAPI(標準パッケージ)が3つあって、")]),e._v(" "),r("ol",[r("li",[e._v("rdsと突合してredisにキャッシュしてる認証APIに、")]),e._v(" "),r("li",[e._v("問い合わせてる認証APIと、")]),e._v(" "),r("li",[e._v("登録のみ転送している認証キー発行API")])]),e._v(" "),r("p",[e._v("といった、8つのECSタスクがシェルスクリプトでごにょごにょされている。\nこのスキルセット持ってる人って確実に格上の方です。すみません。")]),e._v(" "),r("p",[e._v("「動いた」っていう完了要件がないので、とりあえず起動すればいいんだろうと察した。")])])}),[],!1,null,null,null);t.default=n.exports}}]);