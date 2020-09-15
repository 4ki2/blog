<template>
  <div class="theme-container" >
    <Navbar />
    <section class="theme-default-content">
      <article class="vuepress-blog-theme-content"
        itemscope
        itemtype="https://schema.org/BlogPosting">
        <header>
          <h1 class="post-title" itemprop="name headline">
            {{ $frontmatter.title }}
          </h1>
          <PostMeta
            :tags="$frontmatter.tags"
            :author="$frontmatter.author"
            :date="$frontmatter.date"
            :location="$frontmatter.location"
          />
        </header>
        <Content itemprop="articleBody" />
        <footer>
          <PageNav v-bind="{ sidebarItems }" />
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  name: 'Post',
  data () {
    return {
      sidebarItems: []
    }
  },
  components: { Navbar, PostMeta, PageNav },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.vuepress-blog-theme-content
  @extend $wrapper
  background-color: #FFF
  box-shadow 0 10px 20px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1)
  h1
    margin-top 0
</style>
