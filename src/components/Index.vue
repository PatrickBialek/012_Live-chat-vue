<template>
  <div class="card-contanier">
    <div class="card">
      <div class="card-body">
        <h2 class="text-center">Chat application</h2>
        <form class="card-user-info" @submit.prevent="openChat()">
          <label for="user-name">You name:</label>
          <input class="form-control" type="text" name="user-name" v-model="name">
          <button class="btn btn-info">Visit Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      name: null
    };
  },
  methods: {
    openChat() {}
  }
};
</script>

<style scoped>
.card-contanier {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
}
.card-contanier,
.card-user-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  margin: 0 auto;
}
.card-user-info {
  flex-direction: column;
  max-width: 400px;
  margin: 1rem auto 0;
}
.form-control {
  margin-bottom: 0.5rem;
}

@media screen and (min-width: 600px) {
  .card {
    width: 500px;
  }
}
</style>
