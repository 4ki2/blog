(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{601:function(e,n,a){"use strict";a.r(n);var s=a(43),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("開発用と検証用の2台の"),a("code",[e._v("EC2")]),e._v("でそれぞれ"),a("code",[e._v("Mroonga")]),e._v("を動かしている構成。\n開発用からダンプしたデータを検証用にリストア後、\nデータ登録処理の途中で"),a("code",[e._v("INSERT ON DUPLICATE KEY UPDATE")]),e._v("が終わらなくて処理が中断してしまう。")]),e._v(" "),a("p",[a("code",[e._v("SHOW ENGINE INNODB STATUS")]),e._v("すると"),a("code",[e._v("TRANSACTIONS")]),e._v("には"),a("code",[e._v("0 lock")]),e._v("で"),a("code",[e._v("not started")]),e._v("が2つ。\nクエリをkillしても変わらず、"),a("a",{attrs:{href:"http://y-ken.hatenablog.com/entry/how-to-unlock-mroonga-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("調べてみると"),a("OutboundLink")],1),e._v("、\n"),a("code",[e._v("/var/lib/gronnga.log")]),e._v("に同じ症状でロックされたログを発見。")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use ${DB};\nselect mroonga_command('clearlock');\nflush tables;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("と、")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("groonga /var/lib/mysql/${DB}.mrn\n> clearlock\n> quit\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("を、リストアと再起動を繰り返して何度か試したが、\n(MySQL関連のパッケージやファイルを完全に削除したりもした)\n最終的にはMySQLが起動しなくなり、\nEC2を再起動、起動はするがDBは壊れているという状態になる。")]),e._v(" "),a("p",[e._v("時間がなかったのでAMIから初期構築したところ復旧した。")]),e._v(" "),a("p",[e._v("結論としては、")]),e._v(" "),a("ul",[a("li",[e._v("AWSからリタイア通知が届いていたEC2インスタンスだったこと")]),e._v(" "),a("li",[e._v("片方を"),a("code",[e._v("yum update")]),e._v("してメンテナンスバージョン差異があったこと")])]),e._v(" "),a("p",[e._v("のどちらかが原因。\n前者だとしたら、構成を再検討しようにも予算の都合があり対処不能。\n後者については安易にやってしまって反省している。\nprivate subnetのインスタンスなので、ひとまず古いバージョンのままにした。")])])}),[],!1,null,null,null);n.default=t.exports}}]);