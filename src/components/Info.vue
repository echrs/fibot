<template>
  <v-container class="container" fill-height style="background:#FFFFFF">
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-card class="mx-auto" flat>
          <v-img class="white--text align-end" width="250px" height="250px" src="/images/fibot.png"></v-img>
          <v-card-title class="justify-center">Hej! Moje ime je Fi. A tvoje?</v-card-title>
          <v-card-text class="justify-center">
            <v-text-field outlined dense rounded style="width:150px" v-model="imekorisnika"></v-text-field>
          </v-card-text>
           <v-card-text v-if="!authenticated" class="pt-0 justify-center">
          <router-link to="/login"><v-btn class="mr-3" depressed color="#a0e1f6" dark>Prijava</v-btn></router-link>
          <router-link to="/signup"><v-btn color="#A9E4F6" depressed dark>Registracija</v-btn></router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Info",
  data() {
    return store;
  }
};
</script>

<style>
.container {
  height: calc(100vh - 64px) !important;
}
</style>