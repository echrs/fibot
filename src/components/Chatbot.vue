<template>
  <v-container class="container scroll-y" fill-height style="background:#EFFAFE" align-end>
    <v-row style="background:#EFFAFE; max-height 400px; overflow-y: auto;">
      <v-col>
        <div class="pb-1" v-for="(message,key) in messages" :key="key">
          <v-chip v-bind:id="message.text" :imekorisnika="message.imekorisnika">{{message.text}}</v-chip>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="Reci mi!"
          rounded
          outlined
          v-model="newMessage"
          v-on:keyup.enter="send()"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Chatbot",
  components: {},
  data() {
    return store;
  },
  methods: {
    send() {
      console.log("sending " + this.newMessage);
      this.messages.push({
        imekorisnika: this.imekorisnika,
        text: this.newMessage
      }),
      db.collection("usermessages").add({
        imekorisnika: this.imekorisnika,
        newMessage: this.newMessage
      });
              (this.newMessage = "");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-height: calc(100vh - 64px) !important;
  overflow-y: auto;
}
</style>

