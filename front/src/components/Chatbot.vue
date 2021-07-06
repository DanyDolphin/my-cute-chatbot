<template>
  <article class="chatbot">
    <h1>Chatbot</h1>
    <chat-container :messages="messages"/>
    <input-box @send="sendMessage"/>
  </article>
</template>

<script>
import ChatContainer from './ChatContainer.vue'
import InputBox from './InputBox.vue'

import { io } from 'socket.io-client' 
const socket = io(process.env.NODE_ENV === 'development' 
  ? `http://localhost:${process.env.VUE_APP_SERVER_PORT}`
  : `https://${window.location.hostname}`)

export default {
  name: 'Chatbot',
  components: {ChatContainer, InputBox},
  data: () => ({
    messages: []
  }),
  methods: {
    sendMessage(message) {
      this.messages.push({
        sender: 'client',
        text: message
      })
      socket.emit('chat message', message)
    }
  },
  mounted() {
    socket.on('chat message', (message) => {
      this.messages.push({
        sender: 'server',
        text: message
      })
    });
  }
}
</script>

<style scoped>
.chatbot {
  flex: 0 1 560px;
  height: 560px;
  box-shadow: rgba(145, 114, 114, 0.2) 0px 2px 8px 0px;
  border-radius: 16px;
  background-color: hsl(225, 96%, 95%);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
}
.chatbot > h1 {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20pt;
  color: #5c5c5c;
  font-weight: 800;
  text-align: center;
}
</style>