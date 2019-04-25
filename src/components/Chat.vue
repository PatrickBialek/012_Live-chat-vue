<template>
  <div class="container chat">
    <h2 class="text-center">Chat</h2>
    <div class="card">
      <div class="card-body">
        <ul class="chat-messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="text-info chat-author">{{ message.name }}</span>
            <span class="text-dark chat-text">{{ message.content }}</span>
            <span class="text-muted chat-time">{{ message.timestamp }}</span>
          </li>
        </ul>
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;

          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.chat {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chat-messages {
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow: auto;
}
.chat-messages::-webkit-scrollbar {
  width: 3px;
}
.chat-messages::-webkit-scrollbar-track {
  background: #ddd;
}
.chat-messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
.chat-messages li {
  list-style-type: none;
}
.chat-author {
  font-size: 20px;
}
.chat-time {
  display: block;
}
.chat-new-message {
  margin-top: 35px;
}

@media screen and (min-width: 600px) {
  .card {
    width: 500px;
  }
}
@media screen and (max-width: 500px) {
  .chat-messages {
    max-height: 300px;
  }
  .card {
    width: 100%;
  }
}
</style>
