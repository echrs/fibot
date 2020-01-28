<template>
  <v-container class="container scroll-y" fill-height style="background:#EFFAFE" align-end>
    <v-row style="background:#EFFAFE; max-height 400px; overflow-y: auto;">
      <v-col id="msgs" style="visibility:visible;">
        <transition :duration="2000" name="list">
          <div class="pb-1" v-if="imeKorisnika">
            <v-chip>Zdravo {{imeKorisnika}}! O čemu želiš razgovarati?</v-chip>
            <div class="pb-1" v-for="(message, name) in razgovor" :key="name">
              <div class="pb-1">
                <v-btn @click="sendMessage(name)">{{name}}</v-btn>
              </div>
              </div>
            </div>
          </div>
        </transition>
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
  mounted() {},
  methods: {
    sendMessage(value) {
      this.newMessage = value;
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
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

