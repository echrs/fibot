<template>
  <v-container>
    <v-row class="justify-center">
      <v-col align="center" justify="center">
        <v-sheet
          align="center"
          justify="center"
          class="pa-12 mt-12 mb-12"
          width="700"
          height="550"
          normal
        >
        <h6 class="headline font-weight-bold mb-12"> REGISTER@FIBOT </h6>
          <v-form style="width:450px" ref="form">
            <v-text-field
              v-model="imekorisnika"
              :rules="nameRules"
              label="Ime"
              required
            ></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Lozinka"
              required
            ></v-text-field>
            <v-text-field
              v-model="passwordConfirmation"
              :rules="passwordRules"
              type="password"
              label="Ponovite lozinku"
              required
            ></v-text-field>
            <v-alert v-if="password != passwordConfirmation" type="error">Lozinke se ne podudaraju.</v-alert>
            <v-btn depressed v-if="password === passwordConfirmation" color="#a0e1f6" dark class="mt-12" @click="signup">Nastavi</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store.js";
export default {
  name: "signup",
  data() {
    return store;
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {});
    }
  }
};
</script>