module.exports = {
  base: '/blog/',
  title: "4ki2の開発メモ",
  description: "WEB開発系のメモです",
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
        path: '/'
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
