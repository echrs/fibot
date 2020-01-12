<template>
  <v-layout fill-height>
    <Info />
    <Chatbot />
  </v-layout>
</template>

<script>
// @ is an alias to /src
import Chatbot from '@/components/Chatbot.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'home',
  components: {
    Info,
    Chatbot
  }
}
</script>
