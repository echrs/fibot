<template>
  <v-app id="fibot">
    <div>
      <v-app-bar color="#A0E0F6" flat>
        <v-btn icon>
          <router-link to="/">
            <span class="mif-home mif-2x fg-white"></span>
          </router-link>
        </v-btn>

        <v-btn icon>
          <router-link to="/">
            <span class="mif-mail mif-2x fg-white"></span>
          </router-link>
        </v-btn>
        <v-btn icon>
          <router-link to="/">
            <span class="mif-share mif-2x fg-white"></span>
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
      <router-view>
        <v-container fluid align-items="stretch"></v-container>
      </router-view>
    </v-content>

    <v-footer color="#A0E0F6" app>
      <v-spacer />
      <span class="white--text">&copy; 2019</span>
    </v-footer>
    
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
