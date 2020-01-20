<template>
  <v-container class="container" fill-height style="background:#FFFFFF">
    <v-row justify="center" align="center">
      <v-col justify="center" align="center">
        <v-card class="mx-auto" flat>
          <v-img class="white--text align-end" width="250px" height="250px" src="/images/fibot.png"></v-img>
          <v-card-title class="justify-center">Hej! Moje ime je Fi. A ti?</v-card-title>
          <v-card-text class="text-center">
            <v-text-field v-model="imekorisnika" required></v-text-field>
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