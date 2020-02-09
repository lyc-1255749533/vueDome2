<template>
  <!-- <div>
    <D>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </D>
  </div> -->
  <div class="container">
  <header>
    <h1>头部</h1>
  </header>
  <main>
    <p>内容1</p>
    <p>内容2</p>
  </main>
  <footer>
    <p>底部</p>
  </footer>
</div>
</template>

<script>
import D from "./D";
export default {
    components: {
    D
  }
};
</script>

<style scoped>
</style>