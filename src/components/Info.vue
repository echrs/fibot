<template>
  <v-container class="container" fill-height style="background:#FFFFFF">
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-card class="mx-auto" flat>
          <v-img class="white--text align-end" width="250px" height="250px" src="/images/fibot.png"></v-img>
          <v-card-title class="justify-center">
            <vue-typer
              text='Hej! Moje ime je Fi. A tvoje?'
              :repeat="0"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="90"
              caret-animation="blink"
            ></vue-typer>
          </v-card-title>
          <v-card-text class="justify-center">
            <v-text-field dense style="width:150px" v-model="imeKorisnika"></v-text-field>
          </v-card-text>
          <v-card-text v-if="!authenticated" class="pt-0 justify-center">
            <router-link to="/login">
              <v-btn class="mr-3" depressed color="#a0e1f6" dark>Prijava</v-btn>
            </router-link>
            <router-link to="/signup">
              <v-btn color="#A9E4F6" depressed dark>Registracija</v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";
import { VueTyper } from 'vue-typer'

export default {
  name: "Info",
  data() {
    return store;
  },
  components: {
    VueTyper
  }
};
</script>

<style>
.container {
  height: calc(100vh - 64px) !important;
}
</style>