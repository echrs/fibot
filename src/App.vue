<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <nav class="navbar navbar-expand-lg p-0" style="background-color: #A0E0F6">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <router-link to="/"><span class="mif-home mif-2x fg-white"></span></router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <router-link to="/"><span class="mif-mail mif-2x fg-white"></span></router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <router-link to="/"><span class="mif-share mif-2x fg-white"></span></router-link>
                  </a>
                </li>
              </ul>
            <div id="namebranda" class="navbar-brand d-none d-lg-block" href="#">
              <router-link to="/"><img src="/images/logo.png" width="70" height="40" alt="Logo fibot" /></router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="container-fluid h-100">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
