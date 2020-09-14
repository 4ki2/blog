#!/bin/sh
cd $(dirname $0)
PREFIX=src/_posts/$(date '+%F')
cat <<__EOF__ > ${PREFIX}-$(($(ls -1 ${PREFIX}*.md |wc -l)+1)).md
---
date: $(date '+%F %T %:z')
# title: draft
# description: draft
# tags:
#   - draft
# prev: draft
# next: draft
---

__EOF__
exit;
