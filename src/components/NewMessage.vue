<template>
  <form class="form-group" @submit.prevent="addMessage()">
    <label for="new-message">New message (press Enter to send):</label>
    <input class="form-control" type="text" name="new-message" v-model="newMessage">
    <p v-if="feedback" class="text-danger">{{ feedback }}</p>
  </form>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You cannot send a empty message.";
      }
    }
  }
};
</script>
