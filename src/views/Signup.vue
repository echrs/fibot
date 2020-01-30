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
          <h6 class="headline font-weight-bold mb-12">REGISTER@FIBOT</h6>
          <v-form style="width:450px" ref="form">
            <v-text-field v-model="imeKorisnika" :rules="nameRules" label="Ime" required></v-text-field>

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
              label="Ponovno upiši lozinku"
              required
            ></v-text-field>
            <v-alert v-if="password != passwordConfirmation" type="error">Lozinke se ne podudaraju.</v-alert>
            <v-btn
              depressed
              v-if="password === passwordConfirmation"
              color="#a0e1f6"
              dark
              class="mt-12"
              @click="signup"
            >Nastavi</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      imeKorisnika: "",
      nameRules: [
        v => !!v || "Potrebno je unijeti ime",
        v => (v && v.length <= 10) || "Ime mora imati manje od 10 znakova"
      ],
      email: "",
      emailRules: [
        v => !!v || "Potrebno je unijeti e-mail",
        v => /.+@.+\..+/.test(v) || "E-mail treba biti važeći"
      ],
      password: "",
      passwordConfirmation: "",
      passwordRules: [
        v => !!v || "Potrebno je unijeti lozinku",
        v => (v && v.length >= 8) || "Lozinka mora imati više od 8 znakova"
      ]
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          let id = this.email;
          db.collection("users")
            .doc(id)
            .set({
              imeKorisnika: this.imeKorisnika
            })
          .then(function() {
            console.log("Uspješno kreiran korisnik!");
          }).catch(function(error) {
            console.error("Error: ", error);
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>