<template>
  <div class="chat-container" ref="container">
    <message
      v-for="(message, index) in messages"
      :key="index"
      :message="message"/>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'ChatContainer',
  components: {Message},
  props: ['messages'],
  updated() {
    this.$refs.container.scrollTo(0, this.$refs.container.scrollHeight)
  }
}
</script>

<style scoped>
.chat-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

</style>