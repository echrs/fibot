<template>
  <v-chip class="ma-2" color="blue" outlined>{{sender}}{{message}}</v-chip>
</template>

<script>
export default {
  name: "UserMessage",

  props: {
    sender: {
      type: String,
      default: "Korisnik"

    },
    message: {
      type: String,
      default: "User text"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>