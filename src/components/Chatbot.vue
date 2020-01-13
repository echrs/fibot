<template>
  <v-flex md6>
    <v-card color="#EFFAFE" flat height="100%">
      <v-card-text class="text-center">
    <Widget
    :passedProps="passedProps"
    />
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { ReactWrapper } from 'vuera'
import { Widget } from 'rasa-webchat';
export default {
  computed: {
    passedProps () {
      return {
      initPayload: '/get_started',
      socketUrl:'http://localhost:5005',
      socketPath:'/socket.io/',
      customData:'"language": "hr"',
      title:'Fi'
      }
    }
  },
  name: 'Chatbot',
  components: { 'Widget': Widget },
}
</script>
