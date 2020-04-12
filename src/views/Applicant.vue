<template>
  <v-container>
    <div class="header">
      <nav class="container-header">
        <ul class="nav-menu">
          <li class="logo">
            <a href="#">HR</a>
          </li>
          <li class="nav-btn active">
            <router-link to="/dashboard">DASHBOARD</router-link>
          </li>
          <li class="nav-btn">
            <router-link to="/employee">EMPLOYEES</router-link>
          </li>
          <li class="nav-btn">
            <a href="attendance.html">ATTENDANCE</a>
          </li>
          <li class="nav-btn">
            <router-link to="/applicant">APPLICANTS</router-link>
          </li>
          <li class="nav-btn">
            <a href="request.html">LEAVE REQUEST</a>
          </li>
          <li class="nav-btn">
            <a href="broadcast.html">BROADCAST</a>
          </li>
        </ul>

        <ul class="nav-menu-right">
          <li class="nav-btn-user">
            <span>
              <i class="icon-bell pad-6"></i>Hi, Admin
            </span>
          </li>
          <li class="nav-btn">
            <a href="#">LOGOUT</a>
          </li>
        </ul>
      </nav>
    </div>
    <br />
    <h3>Applicant List</h3>
    <v-row class="justify-center">
      <div class="menu-list-right">
        <v-btn small color="error" class="mx-2">Export CSV All</v-btn>
        <v-btn small color="error" class="mx-2">Export CSV</v-btn>
        <v-btn small color="error" class="mx-2">Import CSV</v-btn>
        <v-btn small color="error" class="mx-2">Add Applicant</v-btn>
      </div>
    </v-row>

    <v-row class="justify-center">
      <li class="menu-box active-2">
        <a href="#">Permanent</a>
      </li>
      <li class="menu-box">
        <a href="#">Export CSV (All)</a>
      </li>
      <li class="menu-box">
        <a href="#">Import CSV</a>
      </li>
    </v-row>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(entry,id) in applicantList" :item="entry" :key="id">
        <v-card flat class="text-xs-center justify-center">
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
          <v-card-actions>
            <!-- <v-flex class="text-center"> -->
            <v-btn flat color="grey" @click="addItem(entry)">
              <span>Process</span>
            </v-btn>
            <!-- </v-flex> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      applicantList: [],
      products: [],
      fkey: "mainApplicant",
      filterList: [
        "All",
        "Unprocessed",
        "Scheduled to Psycho Test",
        "Scheduled to Interview"
      ],
      filter: "All"
    };
  },
  created() {
    axios
      .get("http://localhost:3000/job_applicant")
      .then(response => (this.applicantList = response.data));
  },
  methods: {
    resultsFilter(entry) {
      if (this.filter !== "All") {
        if (entry.category === this.filter) {
          return entry;
        }
      } else {
        return entry;
      }
    }
  }
};
</script>

<style>
body {
  background: #f7fafc;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

img {
  width: 100%;
  height: auto;
}

ul {
  padding-left: 0;
  list-style: none;
}

li {
  display: inline-block;
}

nav {
  max-width: 1024px;
  margin: auto;
  display: flex;
}

.header {
  position: sticky;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  z-index: 9;
}

.container {
  position: relative;
}

.container:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 15rem;
  /* background: rgb(0, 212, 80); */
  background-image: linear-gradient(rgb(0, 212, 80), rgb(0, 181, 68));
  z-index: -1;
  transform: skewY(-5deg);
}

/* .container:after {
    content: '';
    position: absolute;
    bottom: 30%;
    width: 100%;
    height: 5rem;
    background: #f6f9fb;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    z-index: -1;
    transform: skewY(:-moz-broken5deg);
} */

.container-header {
  position: relative;
  margin: auto;
}

.nav-menu {
  margin: auto;
  flex-grow: 1;
  padding: 15px 0;
}

.nav-menu-right {
  margin: auto;
  /* flex-grow: 1; */
  padding: 15px 0;
  flex-grow: initial;
  line-height: 3;
}

.active {
  background-color: #00d450;
  color: #fff !important;
}

.active a {
  color: #fff !important;
}

.nav-btn {
  font-size: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}

.nav-btn:hover {
  background-color: #e8f5e9;
}

.nav-btn a {
  color: #333;
  text-decoration: none;
}

.nav-btn-user {
  font-size: 10px;
  padding: 10px 15px;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}

.pad-6 {
  padding-right: 6px;
}

.logo {
  font-size: 20px;
  margin-right: 30px;
  border-radius: 100%;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 2px;
  background: #ffffff;
  box-shadow: 2px 2px 0px 1px #4caf50;
  height: 50px;
  width: 50px;
  transition: all 0.5s ease;
}

.logo a {
  color: #03a9f4;
  text-decoration: none;
  font-style: italic;
  line-height: 2.5;
  padding-left: 8px;
  text-shadow: 1px 1px 0px #03a9f4;
}

.main {
  max-width: 1024px;
  width: 100%;
  margin: auto;
  padding: 2rem 20px;
}

.wrapper-col {
  display: flex;
  flex-direction: row;
  margin: 0 20px;
}

.col {
  width: 100%;
  margin: 1rem;
  -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05),
    0 4px 24px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05), 0 4px 24px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
}

.col-big {
  width: 100%;
  -webkit-box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05),
    0 4px 24px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05), 0 4px 24px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
}

.box {
  text-align: center;
  line-height: 1.5;
  color: #666;
}

.box-title {
  padding: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f9fbe7;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}

.box-text {
  font-size: 3rem;
}

.box-desc {
  font-size: 14px;
  font-style: italic;
  color: #c5c5c5;
  padding-bottom: 1rem;
}

.box-thumb {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.img-thumb {
  width: 3rem;
  border-radius: 100%;
  margin-right: -10px;
}

.box-text-2 {
  font-size: 3rem;
  padding: 1rem;
}

.box-text-2 span {
  color: #c5c5c5;
}

.box-table {
  padding: 2rem;
}

.table {
  width: 100%;
  border-width: 1px;
  border-collapse: collapse;
  border-width: 1px;
}

.table tr {
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}

.no-border {
  border: none !important;
}

.icon {
  font-size: 18px !important;
  line-height: 2 !important;
}

.table-list {
  font-size: 14px;
  text-align: left;
  padding: 8px 16px;
}

.table-list-inner {
  display: flex;
  align-items: center;
}

.table-list-thumb {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
}

.table-list-small {
  font-size: 13px;
  color: #999;
}

.table-list-small-title {
  font-size: 14px;
  color: #666;
  font-weight: bold;
  text-decoration: none;
}

.mar-1 {
  margin-left: 2rem;
}

.table-inner {
  display: flex;
  padding-bottom: 1rem;
}

.img-thumb-small {
  width: 2rem;
  border-radius: 100%;
}

/* .menu {
  display: flex;
  padding: 0 20px;
} */

.menu-title {
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #000;
}

/* .menu-list {
  margin: auto;
  flex-grow: 1;
  padding: 5px 0;
} */

.menu-list-right {
  margin-right: 30px;
  /* flex-grow: 1; */
  /* padding: 150px 0; */
  /* flex-grow: initial;
  line-height: 2.5; */
}

.menu-btn {
  font-size: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.5s ease;
  background-color: #00d450;
}

.menu-btn:hover {
  background-color: #008e36;
}

.menu-btn a {
  color: #fff;
  text-decoration: none;
}

.menu-box {
  font-size: 10px;
  padding: 10px 15px;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.5s ease;
}

.active-2 {
  color: #666;
  text-decoration: none;
  border-bottom: 2px solid #00d450;
}

.menu-box a {
  color: #666;
  text-decoration: none;
}

.textbox {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: block;
  width: 100%;
  line-height: 1.5;
  margin-right: 1rem;
}

.textbox-btn {
  font-size: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.5s ease;
  background-color: #ffc107;
  color: #fff;
  text-transform: uppercase;
}

.textbox-btn-2 {
  font-size: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.5s ease;
  background-color: #c5c5c5;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
}

.textbox-btn-2:hover {
  background-color: #999;
}
</style>