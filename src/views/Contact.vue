 + <template>
  <v-container>
    <v-row class="justify-center">
      <v-col align="center" justify="center">
        <v-sheet
          align="center"
          justify="center"
          class="pa-12 mt-12 mb-12"
          width="700"
          height="500"
          normal
        >
          <h6 class="headline font-weight-bold mb-12">CONTACT US</h6>
          <v-textarea
            v-model="feedback"
            rows="5"
            row-height="50"
            outlined
            auto-grow
            label="Fi mi je rekao..."
          ></v-textarea>
          <v-btn v-if="!sent" depressed color="#a0e1f6" dark @click="send">Pošalji</v-btn>
          <v-btn v-if="sent" depressed color="success" dark @click="reset">Uspješno poslano</v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      feedback: "",
      sent: "",
    };
  },
  methods: {
    send() {
      console.log("Poslan feedback: " + this.feedback);
      db.collection("feedback").add({
        feedback: this.feedback
      });
      this.sent = true;
    },
    reset(){
      this.feedback = "";
      this.sent = false;
    }
  }
};
</script>