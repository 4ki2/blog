<template>
  <div class="theme-container" >
    <Navbar />
    <section
      class="theme-default-content ui-posts"
      itemscope
      itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="ui-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting">
        <meta itemprop="mainEntityOfPage" :content="page.path" />

        <header class="ui-post-title" itemprop="name headline">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </header>

        <p class="ui-post-summary" itemprop="description">
          {{ page.frontmatter.description || page.description }}
        </p>

        <footer>
          <div
            v-if="page.frontmatter.author"
            class="ui-post-meta ui-post-author"
            itemprop="publisher author"
            itemtype="http://schema.org/Person"
            itemscope>
            <NavigationIcon />
            <span itemprop="name">{{ page.frontmatter.author }}</span>
            <span v-if="page.frontmatter.location" itemprop="address">
              &nbsp; in {{ page.frontmatter.location }}
            </span>
          </div>

          <div v-if="page.frontmatter.date" class="ui-post-meta ui-post-date">
            <ClockIcon />
            <time
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date">
              {{ resolvePostDate(page.frontmatter.date) }}
            </time>
          </div>

          <div
            v-if="page.frontmatter.tags"
            class="ui-post-meta ui-post-tag"
            itemprop="keywords">
            <TagIcon />
            <router-link
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag">
              {{ tag }}
            </router-link>
          </div>
        </footer>
      </article>
      <component
        :is="paginationComponent"
        v-if="$pagination.length > 1 && paginationComponent"
      ></component>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import Navbar from '@theme/components/Navbar.vue'
import NavLink from '@theme/components/NavLink.vue'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  name: 'IndexPost',
  components: { Navbar, NavLink, NavigationIcon, ClockIcon, TagIcon },
  data() {
    return {
      paginationComponent: null,
    }
  },
  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  methods: {
    getPaginationComponent() {
      return Pagination
    },

    resolvePostDate(date) {
      return moment(date).locale('ja').fromNow()
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
.ui-post
  background-color: #FFF
  padding 25px
  margin-bottom 25px
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1)

  &:last-child
    border-bottom 0px
    margin-bottom 0px

.ui-post-title
  font-size 1.4em
  border-bottom 0

  a
    cursor pointer
    color $darkTextColor
    transition all 0.2s
    text-decoration none

    &:hover
      text-decoration underline

.ui-post-summary
  font-size 1em

.ui-post-meta
  display inline-flex
  align-items center
  font-size 0.9em
  line-height 1em

  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

  @media (max-width: $MQMobile)
    display flex

    &:not(:last-child)
      margin-bottom 10px

  a
    color inherit
    text-decoration none
    margin-right 5px

    &:hover
      color $accentColor
.pagination
  margin 20px auto
  display table
</style>
