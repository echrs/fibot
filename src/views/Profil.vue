<template>
  <v-container>
    <v-row class="justify-center">
      <v-col align="center" justify="center">
        <v-sheet
          align="center"
          justify="center"
          class="pa-12 mt-12 mb-12"
          width="700"
          height="470"
          normal
        >
          <h6 class="headline font-weight-bold mb-12">ACCOUNT@FIBOT</h6>
          <v-form style="width:450px" ref="form">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              id="exampleInputPassword1"
              label="Lozinka"
              required
            ></v-text-field>

            <v-text-field
              v-model="newPassword"
              :rules="passwordRules"
              type="password"
              id="exampleInputPassword2"
              label="Nova lozinka"
              required
            ></v-text-field>
            <v-text-field
              v-model="newPasswordConf"
              :rules="passwordRules"
              type="password"
              id="exampleInputPassword2"
              label="Ponovno upiši novu lozinku"
              required
            ></v-text-field>
            <v-alert v-if="newPassword != newPasswordConf" type="error">Lozinke se ne podudaraju.</v-alert>
            <v-btn
              v-show="!errornotif && !successful"
              v-if="newPassword === newPasswordConf"
              depressed
              color="#a0e1f6"
              dark
              class="mt-12"
              @click="update"
            >Spremi</v-btn>
            <v-btn
              v-if="successful"
              depressed
              color="success"
              dark
              class="mt-12"
              @click="reset"
            >Lozinka promijenjena</v-btn>
            <v-btn v-if="errornotif" depressed color="red" dark class="mt-12" @click="reset">Error</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "prijava",
  data() {
    return {
      email: "",
      password: "",
      newPassword: "",
      newPasswordConf: "",
      errornotif: false,
      successful: false,
      passwordRules: [
        v => !!v || "Potrebno je unijeti lozinku",
        v => (v && v.length >= 8) || "Lozinka mora imati više od 8 znakova"
      ]
    };
  },
  methods: {
    update() {
      let self = this;
      var user = firebase.auth().currentUser;
      user
        .updatePassword(this.newPassword)
        .then(function() {
          console.log("Uspješno mijenjanje lozinke!");
          self.successful = true;
        })
        .catch(function(error) {
          self.errornotif = true;
        });
    },
    reset() {
      this.email = "";
      this.password = "";
      this.newPassword = "";
      this.newPasswordConf = "";
      this.errornotif = false;
      this.successful = false;
    }
  }
};
</script>