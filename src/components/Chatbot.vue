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
            <TalqueiMessage
              v-show="this.value === teme.upisi"
              text="Trenutno nema upisa u tijeku! Upisi za Fakultet informatike u Puli odvijaju se krajem srpnja i rujna. "
            />
            <TalqueiMessage
              v-show="this.value === teme.stud_programi"
              text="FIPU nudi preddiplomske i diplomske studije. Koji te zanimaju?"
            />
            <TalqueiMessage
              v-if="this.value === teme.stud_programi"
              v-model="grana1"
              :input="{ tag: 'select', options: studiji }"
              is-user
            />
            <TalqueiMessage
              v-show="this.value === teme.stud_pitanja"
              text="Ah! Pitanja - svi ih imamo... Reci mi!"
            />
            <TalqueiMessage
              v-if="this.value === teme.stud_pitanja"
              v-model="grana2"
              :input="{ tag: 'select', options: studiji }"
              is-user
            />
            <TalqueiMessage v-show="this.answer === teme.zanimljivosti" :text="this.recenicaString" />
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
      //slanje prvotne opcije na bazu - hot topics?s
      this.answer = this.value;
      console.log("Sending " + this.value + " to firebase.");
      db.collection("usermessages").add({
        imeKorisnika: this.imeKorisnika,
        message: this.value
      });
    }
  },
  mounted() {
    //randomizer za opciju zanimljivosti
    this.recenicaIndex = Math.floor(Math.random() * this.arrayrec.length);
    this.recenicaString = this.arrayrec[this.recenicaIndex];
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
</style>

