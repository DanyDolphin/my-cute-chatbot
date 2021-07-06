<template>
  <form class="input-box" novalidate @submit="onSubmit">
    <input 
      type="text" 
      autocomplete="off"
      placeholder="Escribe tu mensaje"
      v-model="value"
      />
    <button>Enviar</button>
  </form>
</template>

<script>
export default {
  name: 'InputBox',
  emits: ['send'],
  data: () => ({
    value: '',
  }),
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$emit('send', this.value)
      this.value = ''
    }
  }
}
</script>

<style scoped>
.input-box {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
  padding: 8px 16px;
  display: flex;
  align-items: stretch;
}
.input-box > input {
  padding: 8px 16px;
  border: 1px solid hsl(228, 5%, 80%);
  border-radius: 8px;
  flex-grow: 1;
}
.input-box > input:focus {
  border: 1px solid #aab3b5;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.input-box > button {
  background-color: hsl(225, 96%, 50%);
  color: white;
  padding: 8px 16px;
  margin-left: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.input-box > button:hover {
  background-color: hsl(225, 96%, 30%);
}
</style>