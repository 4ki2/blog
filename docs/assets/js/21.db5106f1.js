(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{542:function(t,n,e){"use strict";e.r(n);var l=e(43),a=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1つめ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1つめ"}},[t._v("#")]),t._v(" １つめ")]),t._v(" "),e("p",[t._v("1つのテーブルにmroongaのfulltextカラムが2つあり、同じ文字列を検索したいとする。\n次の様に、OR条件にするとインデックスが使用されなかった。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fulltext1=? OR fulltext2=?\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("原因はおそらくmysqlのインデックス制限だけど、mroongaの仕様かもしれない環境依存かもしれないし未調査。")]),t._v(" "),e("p",[t._v("回避する方法としては、")]),t._v(" "),e("ol",[e("li",[t._v("fulltextカラム毎にselectしてunionする（それぞれのインデックスを使用する目的）")]),t._v(" "),e("li",[t._v("fulltextのマルチインデックスを別に作成してMATCH句で指定する\nがあった。")])]),t._v(" "),e("p",[t._v("前者は、ほぼ同じクエリの連結になるので冗長的。\n取得するカラムや別のテーブルと結合している場合等、unionして問題ないかの確認は必要になる。")]),t._v(" "),e("p",[t._v("後者は、union allと同等でどちらかにあればヒットする。\nただし、fulltextカラムの組み合わせの数だけインデックスが必要になるので上限がある。")]),t._v(" "),e("h2",{attrs:{id:"_2つめ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2つめ"}},[t._v("#")]),t._v(" ２つめ")]),t._v(" "),e("p",[t._v("mroongaのfulltextカラムがある2つのテーブル(A,B)とそれぞれのidを外部参照しているテーブル(C)の3つを結合してselectしたいとする。\nそれぞれ数百万レコード入っている。\nAとBのfulltextカラムから検索する文字列は異なる。")]),t._v(" "),e("p",[t._v("まず、普通に結合してみた。[SELECT1]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("from C join A on C.a_id=B.id join B on C.b_id=B.id\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("AとBはfulltextインデックスを使わなければならず、\nAとBは関係性は希薄でレコード数もまるで異なるため、\nCには共通して使えるインデックスは作れない。\nこの時点で詰んでたけど、LEFT JOINにすると実行計画が変わり、\n期待するインデックスを使ってくれるようになったりしたので、\n最悪アプリ側でごにょればいいやといろいろ試してみたが、\nforce indexしても無駄だったり、オプティマイザ調査まで時間かけてられないので無理でした。")]),t._v(" "),e("p",[t._v("次に、サブクエリにしてみた。[SELECT2]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("from (C join A on C.a_id=B.id) AS CA join (C join B on C.b_id=B.id) AS CB on CA.id=CB.id\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("サブクエリで期待するインデックスを使ってくれるが、件数の違いがボトルネックになっていた。\n考えたら等価結合なのでDISTINCTしたら改善できた。\nただ、このやり方でもサブクエリで取得したレコードが多いと遅い。")]),t._v(" "),e("p",[t._v("とりあえず今回は、")]),t._v(" "),e("ul",[e("li",[t._v("AまたはBどちらかのfulltextカラムを検索するか、またはfulltextカラムを検索しない場合、[SELECT1]で実行")]),t._v(" "),e("li",[t._v("AとBどちらのfulltextも検索する場合、[SELECT2]で実行（ただし範囲が広いと遅い）\nという場合分けの実装で終わらせた。")])]),t._v(" "),e("p",[t._v("完全に解消するには、3テーブルを1つにすればよさそう。\nインデックスの組み合わせが上限に到達しなければだけど。")])])}),[],!1,null,null,null);n.default=a.exports}}]);