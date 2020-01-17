<template>
  <v-container fill-height fluid class="p-0">
    <v-row class="p-0">
      <v-col cols="6" class="p-0">
        <Info />
      </v-col>
      <v-col cols="6" class="p-0">
        <Chatbot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Chatbot from "@/components/Chatbot.vue";
import Info from "@/components/Info.vue";

export default {
  name: "home",
  components: {
    Info,
    Chatbot
  }
};
</script>
