module.exports = {
  base: '/blog/',
  locales:{
    '/': {
      lang: 'ja',
      title: "4ki2の開発メモ",
      description: "WEB開発系のメモです"
    }
  },
  themeConfig: {
    sidebar: false,
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [ '@vuepress/blog', {
      directories: [{
        id: 'post',
        dirname: '_posts',
        path: '/',
        pagination: {
          layout: 'IndexPost',
          nextText: '古いメモ',
          prevText: '新しいメモ',
          lengthPerPage: 10
        }
      }]
    }],
    [ '@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [ '@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      },
      dateOptions: {
        hour12: false
      }
    }],
    'vuepress-plugin-smooth-scroll'
  ]
}
