(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{550:function(n,s,e){"use strict";e.r(s);var a=e(43),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("ruby 2.5.1/2.4.4/2.3.7 でインストール失敗。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('compiling binder.cpp\ncc1plus: 警告: command line option "-Wdeclaration-after-statement" is valid for C/ObjC but not for C++\ncc1plus: error: unrecognized command line option "-Wshorten-64-to-32"\ncc1plus: 警告: command line option "-Wimplicit-function-declaration" is valid for C/ObjC but not for C++\ncc1plus: error: unrecognized command line option "-Wdivision-by-zero"\ncc1plus: error: unrecognized command line option "-Wextra-tokens"\nmake: *** [binder.o] エラー 1\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("ローカルの設定\nirb(main):001:0> RbConfig::CONFIG['CC']\n=> \"clang\"\nirb(main):002:0> RbConfig::CONFIG['CPP']\n=> \"clang -E\"\nirb(main):003:0> RbConfig::CONFIG['CXX']\n=> \"g++\"\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://github.com/eventmachine/eventmachine/issues/825",target:"_blank",rel:"noopener noreferrer"}},[n._v("eventmachineでこけてて"),e("OutboundLink")],1),n._v("、\n"),e("a",{attrs:{href:"https://qiita.com/Tats_U_/items/8c13988f9d3723eb4243",target:"_blank",rel:"noopener noreferrer"}},[n._v("原因はgccが古いかも"),e("OutboundLink")],1),n._v("ということ。\nここを参考にsclなるツールを導入してみる。")]),n._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[n._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" centos-release-scl\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("これだけでcentos-sclo系のリポジトリが有効になる。")]),n._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[n._v("yum info devtoolset-7-gcc"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" GCC\n要約                "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(":")]),n._v(" GCC version "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("7")]),n._v("\nyum info devtoolset-6-gcc"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" GCC\n要約                "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(":")]),n._v(" GCC version "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("6")]),n._v("\nyum info devtoolset-5-gcc"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" GCC\nエラー: 表示するパッケージはありません\nyum info devtoolset-4-gcc"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" GCC\n要約                "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(":")]),n._v(" GCC version "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),n._v("\nyum info devtoolset-3-gcc"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" GCC\n要約                "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v(":")]),n._v(" GCC version "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("4.9")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("devtoolのバージョンはgccのバージョンに依存していると見ていいかも。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("scl enable devtoolset-3 zsh\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("インストールしたパッケージを使うって宣言しないと有効にならない。\nログインが切れれば無効になる。\n今回は次の２つをインストールした。")]),n._v(" "),e("ul",[e("li",[n._v("devtoolset-3-gcc")]),n._v(" "),e("li",[n._v("devtoolset-3-gcc-c++")])]),n._v(" "),e("p",[n._v("sclはenv系みたいに切り替えできて知れたのはよかったんだけど、\nmailcatcherのエラー(eventmachineがコンパイルできない)については\n"),e("code",[n._v("CC=clang")]),n._v("でrubyをインストール("),e("code",[n._v("rbenv install")]),n._v(")してしまったことが原因だった。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("irb(main):001:0> RbConfig::CONFIG['CC']\n=> \"gcc\"\nirb(main):002:0> RbConfig::CONFIG['CPP']\n=> \"gcc -E\"\nirb(main):003:0> RbConfig::CONFIG['CXX']\n=> \"g++\"\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("このCC(CPPは"),e("code",[n._v("$(CC) -E")]),n._v("固定)がclangになっていたため、\nclangでコンパイルするがMacのgccのオプションがなくエラーとなっていた。\ngccはdevtoolsetでアップグレードできるが、\nclangはソースからビルドするしかなくて、\n結局rbenvを削除してcloneし直して、\ncentosデフォルトの"),e("code",[n._v("gcc4.4")]),n._v("でコンパイルできた。\nアプリがmailcatcherでメール送信する際に、\ncatchmailを実行するが、\n/root直下にrbenvがあるとnginxから実行できないため、\n/optの下のクローンしたリポジトリパスをRBENV_ROOTにして、\n全ユーザーでrubyを使えるようにした。")])])}),[],!1,null,null,null);s.default=t.exports}}]);