<template>
  <v-chip class="ma-2" color="blue" outlined>{{message}}</v-chip>
</template>

<script>
export default {
  name: "BotMessage",
  props: {
    message: {
      type: String,
      default: "Bot text"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>