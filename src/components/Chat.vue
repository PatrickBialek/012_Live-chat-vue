<template>
  <div class="container chat">
    <h2>Chat</h2>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.chat {
  text-align: center;
  padding: 3rem 1rem;
}
</style>
