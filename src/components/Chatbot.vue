<template>
  <v-container class="container scroll-y" fill-height style="background:#EFFAFE" align-end>
    <v-row style="background:#EFFAFE; max-height 400px; overflow-y: auto;">
      <v-col id="msgs" style="visibility:hidden;">
        <div class="pb-1">
          <v-chip>{{initialMessage}}</v-chip>
        </div>
        <div class="pb-1">
          <v-chip>nloop</v-chip>
        </div>
        <transition-group name="list">
          <div class="pb-1" v-for="(message,key) in messages" :key="key">
            <v-chip v-bind:id="message.text" :imeKorisnika="message.imeKorisnika">{{message.text}}</v-chip>
          </div>
        </transition-group>
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
  mounted() {
    let self = this;
    setTimeout(function() {
      if (self.imeKorisnika != "") {
        self.initialMessage =
          "Zdravo " + self.imeKorisnika + "! O čemu želiš razgovarati?";
      } else {
        self.initialMessage = "Zdravo! O čemu želiš razgovarati?";
      }
    }, 5000);
    setTimeout(function() {
      document.getElementById("msgs").style.visibility = "visible";
    }, 1000);
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
      this.newMessage = "";

      //this.receiveResponse();
    },
    receiveResponse() {
      //this.disableInput = true,
      this.messages.push({
        imeKorisnika: "bot",
        text: "A reply!"
      });
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
.list-item {
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

