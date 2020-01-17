<template>
<v-container fill-height>
  <v-layout style="background:#EFFAFE" justify-center align-center>
        <v-card color="#EFFAFE" flat height="100%">
      <v-card-text class="text-center">
      </v-card-text>
    </v-card>
  </v-layout>
  </v-container>
</template>

<script>
import UserMessage from "@/components/UserMessage.vue";
import BotMessage from "@/components/BotMessage.vue";
import Input from "@/components/Input.vue";

export default {
  name: "Chatbot",
  components: {
    UserMessage,
    BotMessage,
    Input
  }
};
</script>