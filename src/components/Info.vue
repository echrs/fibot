<template>
  <v-container class="container" fill-height style="background:#FFFFFF">
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-card class="mx-auto" flat>
          <v-img class="white--text align-end" width="300px" height="300px" src="/images/fibot.png"></v-img>
          <v-card-title class="justify-center">
            <vue-typer
              text="Hej! Moje ime je Fi."
              :repeat="0"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="90"
              caret-animation="blink"
            ></vue-typer>
          </v-card-title>
          <v-card-title v-if="!authenticated" class="pt-0 justify-center">
            <vue-typer text="A tvoje?" :repeat="0" :pre-type-delay="2600" :type-delay="90"></vue-typer>
          </v-card-title>
          <v-card-text v-if="!authenticated" class="pt-0 justify-center">
            <router-link to="/login">
              <transition name="fade">
                <v-btn v-if="showbtn" class="mr-3" outlined color="#6ADCEC" dark>Prijava</v-btn>
              </transition>
            </router-link>
            <router-link to="/signup">
              <transition name="fade">
                <v-btn v-if="showbtn" color="#6ADCEC" depressed dark>Registracija</v-btn>
              </transition>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";
import { VueTyper } from "vue-typer";

export default {
  name: "Info",
  data() {
    return store;
  },
  components: {
    VueTyper
  },
  mounted() {
    let self = this;
    setTimeout(function() {
      self.showbtn = true;
    }, 4000);
  }
};
</script>

<style>
.container {
  height: calc(100vh - 64px) !important;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  font-size: 1.5rem;
}
.custom.caret {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>