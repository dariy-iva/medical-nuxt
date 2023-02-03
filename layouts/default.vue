<template>
  <div class="app">
    <Header/>
    <main class="content wrapper">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "default",

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding-top: 64px;
  padding-bottom: 64px;
  flex-grow: 1;
}

@media (max-width: 767px) {
  .content {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style>