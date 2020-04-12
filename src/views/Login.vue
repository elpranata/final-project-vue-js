<template>
  <div class="dashboard" style="text-align:center">
    <v-container class="my-5 justify-center">
      <v-layout row class="mb-5 justify-center">
        <v-card class="justify-center" width="30%">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>VUE HR</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field label="Username" name="login" type="text" v-model="username" />
              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              />
            </v-form>
            <router-link to="/dashboard">
              <v-btn color="primary">Login</v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      master: [],
      link: "",
      username: "",
      password: ""
    };
  },
  methods: {
    // login: function() {
    //   axios
    //     .get("http://localhost:3000/user")
    //     .then(response => (this.master = response.data[0]))
    //     .catch(error => console.log(error));
    //   alert("test");
    // }
  }
};
</script>