<template>
  <v-app id="fibot">
    <div>
      <v-app-bar color="#A0E0F6" flat>
        <v-btn icon>
          <router-link to="/">
            <v-icon color="white">home</v-icon>
          </router-link>
        </v-btn>
        <v-btn icon>
          <router-link to="/signup">
            <v-icon color="white">person</v-icon>
          </router-link>
        </v-btn>
        <v-btn icon>
          <router-link to="/">
            <v-icon color="white">mail</v-icon>
          </router-link>
        </v-btn>
        <v-btn icon>
          <router-link to="/">
            <v-icon color="white">share</v-icon>
          </router-link>
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-title>
          <router-link to="/">
            <img src="/images/logo.png" width="70" height="40" alt="Logo fibot" />
          </router-link>
        </v-toolbar-title>
      </v-app-bar>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    }
  },
  mounted() {
    //vidi ako je user prijavljen
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Korisnik je prijavljen kao " + user.email);
        this.authenticated = true;
        this.userEmail = user.email;
        if (this.$route.name !== "home") {
          this.$router.push({ name: "home" });
        }
      } else {
        console.log("Korisnik nije prijavljen.");
        this.authenticated = false;
        if (this.$route.name !== "login") {
          this.$router.push({ name: "login" });
        }
      }
    });
  }
};
</script>
