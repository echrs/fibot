<template>
  <v-container class="container" fill-height style="background:#EFFAFE">
    <v-row style="background:#EFFAFE" justify="center" align="center">
      <v-col>
        <v-card color="#EFFAFE" flat height="100%">
          <v-card-text>
            <UserMessage />
            <BotMessage />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BotMessage from "@/components/BotMessage.vue";
import UserMessage from "@/components/UserMessage.vue";
import Input from "@/components/Input.vue";

export default {
  name: "Chatbot",
  components: {
    BotMessage,
    UserMessage,
    Input
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 64px) !important;
}
</style>

