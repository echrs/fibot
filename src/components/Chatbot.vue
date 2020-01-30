<template>
  <v-container
    class="container scroll-y"
    fill-height
    justify-center
    style="background:#EFFAFE"
    align-end
  >
    <v-row style="background:#EFFAFE; overflow-y: auto;">
      <v-col id="msgs">
        <template>
          <Talquei>
            <TalqueiMessage :imeKorisnika="imeKorisnika" :text="initialMessage" />
            <TalqueiMessage v-model="value" :input="{ tag: 'select', options: teme }" is-user />
            <TalqueiMessage v-if="this.answer === teme.upisi"
              text="Trenutno nema upisa u tijeku! Upisi za Fakultet Informatike u Puli odvijaju se u rujnu. "
            />
            <TalqueiMessage v-if="this.answer === teme.stud_programi"
              text="FIPU nudi preddiplomske i diplomske studije. Koji te zanimaju?"
            />
          </Talquei>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from "@/store.js";
import { Talquei, TalqueiMessage } from "talquei";

export default {
  name: "Chatbot",
  components: { Talquei, TalqueiMessage },
  data() {
    return store;
  },
  watch: {
    value: function() {
      // this.messages.push({
      //   imeKorisnika: this.imeKorisnika,
      //   text: this.value
      // }),
      this.answer = this.value;
      console.log("Sending " + this.value + " to firebase.");
      debugger;
      db.collection("usermessages").add({
        imeKorisnika: this.imeKorisnika,
        message: this.value
      });
    }
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
    }, 1000);
  },
  methods: {
    // sendMessage() {
    //   console.log("sending " + this.value);
    //      this.messages.push({
    //        imeKorisnika: this.imeKorisnika,
    //        text: this.value
    //      }),
    //   db.collection("usermessages").add({
    //     imeKorisnika: this.imeKorisnika,
    //     message: this.value
    //   });
    //     this.receiveResponse();
    // },
    // receiveResponse() {
    //     this.disableInput = true,
    //   this.messages.push({
    //     imeKorisnika: "bot",
    //     text: "A reply!"
    //   });
    //     this.disableInput = false
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/style.css";
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
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

