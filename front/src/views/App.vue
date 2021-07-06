<template>
  <section class="layout">
    <chatbot/>
  </section>
</template>

<script>
import Chatbot from '../components/Chatbot.vue'

export default {
  components: { Chatbot },
  name: 'App'
}
</script>

<style>
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.layout {
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
