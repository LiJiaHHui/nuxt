<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a>
         -->
         <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link class="nav-link" to="/" exact >Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
          <nuxt-link class="nav-link" to="/register">
            <a >Sign up</a>
          </nuxt-link>
          </li>
          <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">
            <a >Sign in</a>
          </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
            <img class="user-pic" src= "http://toutiao.meiduo.site/FtNcS8sKFSYQbtBbd40eFTL6lAs">
              zyl
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 子路由 -->
    <nuxt-child></nuxt-child>
    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>

    </div>
</template>
<script>
export default {
    name:'LauyoutIndex'
}
</script>
<style scoped>

</style>