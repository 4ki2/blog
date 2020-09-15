<template>
  <div class="theme-container">
    <Navbar />
    <section class="theme-default-content">
      <div class="error-content">
        <h1>404</h1>
        <blockquote>存在しないページです。</blockquote>
        <RouterLink to="/">トップへ戻る</RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.error-content
  @extend $wrapper
  background-color #FFF
  h1
    margin-top 0
</style>
