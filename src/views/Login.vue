<template>
  <v-container>
    <v-row class="justify-center">
      <v-col align="center" justify="center">
        <v-sheet
          align="center"
          justify="center"
          class="pa-12 mt-12 mb-12"
          width="700"
          height="700"
          normal
        >
          <v-form ref="form">
            <v-text-field
              v-model="imekorisnika"
              :counter="10"
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
              type="password"
              label="Ponovite lozinku"
              required
            ></v-text-field>
            <v-btn color="blue" class="mr-4" @click="signup">REGISTRIRAJ SE</v-btn>
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
      imekorisnika: "",
      nameRules: [
        v => !!v || "Potrebno je unijeti ime",
        v => (v && v.length <= 10) || "Ime mora imati manje od 10 znakova"
      ],
      email: "",
      password: "",
      passwordConfirmation: "",
      passwordRules: [
        v => !!v || "Potrebno je unijeti lozinku",
        v => (v && v.length >= 8) || "Lozinka mora imati više od 8 znakova"
      ],
      emailRules: [
        v => !!v || "Potrebno je unijeti e-mail",
        v => /.+@.+\..+/.test(v) || "E-mail treba biti validan"
      ]
    };
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