<template>
  <span
    class="message" 
    :class="['message-' + message.sender]">
    {{message.text}}
  </span>
</template>

<script>
export default {
  name: 'Message',
  props: ['message']
}
</script>

<style scoped>
.message {
  display: inline-block;
  margin-bottom: 16px;
  padding: 16px 24px;
  border-radius: 8px;
  max-width: 75%;
}
.message-client {
  align-self: flex-end;
  background-color: hsl(225, 96%, 15%);
  color: white
}
.message-server {
  align-self: flex-start;
  background-color: white
}
</style>