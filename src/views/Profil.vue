<template>
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
              label="Ponovno upišite novu lozinku"
              required
            ></v-text-field>
            <v-alert v-if="newPassword != newPasswordConf" type="error">Lozinke se ne podudaraju.</v-alert>
            <v-btn
              v-if="newPassword === newPasswordConf"
              depressed
              color="#a0e1f6"
              dark
              class="mt-12"
              @click="update"
            >Spremi</v-btn>
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
      successful: "",
      passwordRules: [
        v => !!v || "Potrebno je unijeti lozinku",
        v => (v && v.length >= 8) || "Lozinka mora imati više od 8 znakova"
      ]
    };
  },
  methods: {
    update() {
      var user = firebase.auth().currentUser;
      user
        .updatePassword(this.newPassword)
        .then(function() {
          console.log("Uspješno mijenjanje lozinke!");
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  }
};
</script>