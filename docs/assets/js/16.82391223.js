(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{537:function(s,e,t){"use strict";t.r(e);var a=t(43),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ebs-using-volumes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("EBSマウント"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("fstabにuuidを指定して追加する。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /dev/disk/by-uuid/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###     /           xfs    defaults,noatime  1   1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###     /data       xfs    defaults,nofail   0   0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("5列目の数字はdump要否なので0、\n6列目は起動時fsckなので0でよい。")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://www.linux-beginner.com/linux_kihon64.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("fstabについて"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://d.hatena.ne.jp/labunix/20120115",target:"_blank",rel:"noopener noreferrer"}},[s._v("情報古いけど"),t("OutboundLink")],1),s._v("、tmpfsのメモリ使用量のデフォルトは半分(50%)で決まってるっぽい。")]),s._v(" "),t("p",[s._v("起動後に次を実行すれば上限は変えられる")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mount -o remount,size=90% /dev/shm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);