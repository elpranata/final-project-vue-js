<template>
  <v-container>
    <br />
    <h3>Applicant List</h3>
    <v-row class="justify-center">
      <div class="menu-list-right">
        <v-btn small color="error" class="mx-2">Export CSV All</v-btn>
        <v-btn small color="error" class="mx-2">Export CSV</v-btn>
        <v-btn small color="error" class="mx-2">Import CSV</v-btn>
        <router-link to="/add-applicant">
          <v-btn small color="error" class="mx-2">Add Applicant</v-btn>
        </router-link>
      </div>
    </v-row>

    <v-row class="justify-center">
      <v-btn
        v-for="(item, key) in getDataApplicantStatus"
        :key="key"
        class="ma-2"
        color="primary"
        dark
        outlined
        rounded
        @click="setActiveStatus(item)"
      >{{item}}</v-btn>
    </v-row>

    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(entry,id) in getDataApplicant" :item="entry" :key="id">
        <v-card flat class="text-xs-center justify-center">
          <div>
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img src="https://image.flaticon.com/icons/png/512/912/912214.png" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading font-weight-bold">{{entry.name}}</div>
              <div class="subheading font-weight-bold">{{entry.email}}</div>
              <div class="grey--text">{{entry.applicant_status}}</div>
            </v-card-text>
          </div>

          <v-card-actions>
            <v-dialog v-model="dialog" persistent max-width="1000px">
              <template v-slot:activator="{ on }">
                <v-btn small flat color="green" v-on="on">
                  <span>Update</span>
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  <span class="headline">Update Applicant</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-col cols="12">
                          <v-text-field v-model="form.name" v-bind:label="entry.name" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="form.email"  v-bind:label="entry.email"  required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="form.phone_number"  v-bind:label="entry.phone_number" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-date-picker width="800px" v-model="form.birth_date"  v-bind:label="entry.birth_date" ></v-date-picker>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field v-model="form.cv_file"  v-bind:label="entry.cv_file" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-select
                            v-model="form.department"
                            label="Department"
                            required
                            :items="departmentList"
                          ></v-select>
                        </v-col>
                             <v-col cols="12">
                          <v-select
                            v-model="form.applicant_status"
                            label="Status"
                            required
                            :items="getDataApplicantStatus"
                          ></v-select>
                        </v-col>
                      </v-form>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="update(entry)">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn small flat color="red" @click="deleteItem(entry)">
              <span>Delete</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      applicantList: [],
      products: [],
      fkey: "mainApplicant",
      activeStatus: "Psychotest",
      dialog: false,
      departmentList: ["IT", "Marketing", "Bussiness"],
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
      getApplicant: "getApplicant",
      getApplicantStatus: "getApplicantStatus",
      getDepartment: "getDepartment"
    }),
    getDataApplicant() {
      return this.getApplicant.filter(
        ob => ob.applicant_status === this.activeStatus
      );
    },
    getDataApplicantStatus() {
      return this.getApplicantStatus;
    },
    getDataDepartment() {
      return this.getDepartment;
    }
  },
  methods: {
    ...mapActions({
      fetchApplicant: "fetchApplicant",
      fetchApplicantStatus: "fetchApplicantStatus",
      fetchDepartment: "fetchDepartment"
    }),
    setActiveStatus(item) {
      this.activeStatus = item;
    },
    update(entry){
       return axios.put('http://localhost:3000/job_applicant/' + entry.id , this.form).then(res => {
           alert("Data Berhasil diupdate")
           console.log(res);
          }).catch((err) => {
            console.log(err);
            
          })
    },
    deleteItem(entry){
        return axios.delete('http://localhost:3000/job_applicant/' + entry.id).then(res => {
           alert("Data Berhasil dihapus")
           console.log(res);
          }).catch((err) => {
            console.log(err);
          })
    }
  },
  created() {
    this.fetchApplicant();
    this.fetchApplicantStatus();
    this.fetchDepartment();
  }
};
</script>

