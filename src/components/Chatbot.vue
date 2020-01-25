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
          :disabled="disableInput"
          v-model="newMessage"
          v-on:keyup.enter="sendMessage()"
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
    sendMessage() {
      console.log("sending " + this.newMessage);
      this.messages.push({
        imeKorisnika: this.imeKorisnika,
        text: this.newMessage
      }),
      db.collection("usermessages").add({
        imeKorisnika: this.imeKorisnika,
        newMessage: this.newMessage
      });
      this.newMessage = ""

      this.receiveResponse()
    },
    receiveResponse() {
      //this.disableInput = true,
            this.messages.push({
        imeKorisnika: "bot",
        text: "A reply!"
      })
      //this.disableInput = false
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

