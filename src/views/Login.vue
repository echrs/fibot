<template>
  <v-container>
    <v-row class="justify-center">
      <v-col align="center" justify="center">
        <v-sheet
          align="center"
          justify="center"
          class="pa-12 mt-12 mb-12"
          width="700"
          height="400"
          normal
        >
          <h6 class="headline font-weight-bold mb-12">LOGIN@FIBOT</h6>
          <v-form style="width:450px" ref="form">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Lozinka"
              required
            ></v-text-field>
            <v-btn v-show="!errornotif" depressed color="#a0e1f6" dark class="mt-12" @click="login">Nastavi</v-btn>
            <v-btn v-show="errornotif" depressed color="red" dark class="mt-12" @click="reset">Error</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      emailRules: [v => !!v || "Potrebno je unijeti e-mail"],
      password: "", 
      passwordRules: [v => !!v || "Potrebno je unijeti lozinku"],
      errornotif: false
    };
  },
  methods: {
    login() {
      let self = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error);
          self.errornotif=true;
        });
    },
    reset(){
      this.email="";
      this.password="";
      this.errornotif=false;
    }
  }
};
</script>