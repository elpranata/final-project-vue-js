<template>
  <v-container full-width fluid>
    <v-flex full-width text-center>
      <v-row class="justify-center">
        <h3>Edit Applicant</h3>
      </v-row>
      <div></div>
      <v-row class="justify-center">
        <div style="width:80%">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="form.name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <div>
              <v-date-picker full-width v-model="form.birth_date"></v-date-picker>
            </div>
            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-text-field
              v-model="form.phone_number"
              :rules="nameRules"
              label="Phone Number"
              required
            ></v-text-field>

            <v-text-field v-model="form.cv_file" :rules="nameRules" label="CV File" required></v-text-field>

            <v-select
              v-model="form.department"
              :items="this.getDataDepartment"
              label="Department"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>

            <router-link to="/applicant">
              <v-btn :disabled="!valid" color="success" class="mr-4 rounded" @click="edit()">Edit</v-btn>
            </router-link>

            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
          </v-form>
        </div>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      form: {
        id: "",
        birth_date: "",
        name: "",
        email: "",
        phone_number: "",
        cv_file: "",
        department: "",
        applicant_status: "Unprocessed"
      }
    };
  },
  computed: {
    ...mapGetters({
      getDepartment: "getDepartment"
    }),
    getDataDepartment() {
      return this.getDepartment;
    }
  },
  methods: {
    ...mapActions({
      fetchDepartment: "fetchDepartment"
    }),
    edit() {
      if (this.form.data != null) {
        axios
          .put("http://localhost:3000/job_applicant/ "+ this.$route.params.id , this.form)
          .then(res => {
            alert("Succesfully Edit Applicant!");
            this.form.name = "";
            this.form.email = "";
            this.form.birth_date = "";
            this.form.phone_number = "";
            this.form.cv_file = "";
            this.form.department = "";
            console.log(res);
          }).catch((err) => {
            console.log(err); 
          });
      } else {
        alert("Data is empty! Not adding anything");
      }
    },
  },
  created() {
    this.fetchDepartment();
  }
};
</script>