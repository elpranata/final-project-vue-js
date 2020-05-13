<template>
  <div class="section">
    <div class="container">
    <div class="main">
      <div class="menu">
        <ul class="menu-list">
          <div class="menu-title">Leave Request List                          
          </div>
        </ul>
        <ul class="menu-list-right">
          <li class="menu-btn">
            <a href="#">Export CSV</a>
          </li>
          <li class="menu-btn">
            <a href="#">Export CSV (All)</a>
          </li>
          <li class="menu-btn">
            <a href="#">Add Leave Request</a>
          </li>
        </ul>
      </div>
      <div class="wrapper-col">
        
        <div class="col-big">
          <div class="box">
            <div class="box-title">
              <li v-for="(entry, key) in getRequestStatus" :key="key"  :item="entry"  @click="setActiveStatus(entry)" class="menu-box active-2">
                <v-btn small>{{entry}}</v-btn>
              </li>
            </div>

            <div class="box-table">
              <v-simple-table class="table no-border">
                <tr class="no-border">
                  <td class="table-list">
                    <div class="table-inner">
                      <input type="text" placeholder="Type to search" class="textbox">
                      <button class="textbox-btn">Search</button>
                  </div>
                  </td>
                </tr>
                <tr v-for="(entry,id) in getDataLeaveRequest" :item="entry" :key="id"  >
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class=""><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="img-thumb"></a>
                      </div>
                      <div class="mar-1">
                        <a href="#" class="table-list-small-title">{{entry.employee_name}}</a>
                        <div class="table-list-small">{{entry.information}}</div>
                        <div class="table-list-small">{{entry.status}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small-title">{{entry.position}}</div>
                    <div class="table-list-small">{{entry.department}}</div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small">Leave at {{entry.start_date}}</div>
                    <div class="table-list-status">{{entry.status}}</div>
                  </td>
                  <td class="table-list">
                     <v-dialog v-model="dialog" persistent max-width="300px" max-height="300px">
                     <template v-slot:activator="{ on }">
                       <v-btn class="textbox-btn-2" v-on="on">Edit</v-btn>
                     </template>
                     <v-card height="50%">
                       <v-card-title>
                         <span class="headline">Edit Leave Request</span>
                       </v-card-title>
                       <v-card-text>
                         <v-container>
                           <v-row>
                             <v-col cols="12" sm="12">
                                    <v-select
                                      :items="['Approved', 'Pending', 'Rejected']"
                                      v-model="form.status"
                                      label="Status"
                                      required
                                    ></v-select>
                                </v-col>
                           </v-row>
                         </v-container>
                       </v-card-text>
                       <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" text @click="updateItem(entry)">Save</v-btn>
                      </v-card-actions>
                     </v-card>
                     </v-dialog>
                  </td>
                </tr>
              </v-simple-table>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
     data() {
      return {
          dialog:false,
          activeStatus:'Approved',
          form: {
              id:"",
              employee_name: "",
              position: "",
              department: "",
              start_date: "",
              end_date: "",
              accepted_date: "",
              information: "",
              status: ""
          }
      }
     },
     computed:{
       ...mapGetters({
         getLeaveRequest:"getLeaveRequest",
         getRequestStatus:"getRequestStatus"
       }),
       getDataLeaveRequest(){
         return this.getLeaveRequest.filter(
           ob => ob.status === this.activeStatus
         );
       },
       getDataRequestStatus(){
         return this.getRequestStatus;
       }
     },
     methods:{
       ...mapActions({
         fetchLeaveRequest:"fetchLeaveRequest",
         fetchRequestStatus:"fetchRequestStatus"
       }),
       updateItem(entry){
             this.form.employee_name = entry.employee_name
             this.form.position = entry.position
             this.form.department =entry.department
             this.form.start_date = entry.start_date
             this.form.end_date = entry.end_date
             this.form.accepted_date = entry.accepted_date
             this.form.information = entry.information
            return axios.put('http://localhost:3000/leave_request/' + entry.id , this.form).then(res => {
            alert("Data Berhasil diupdate")
            console.log(res);
            }).catch((err) => {
              console.log(err);
            })
       },
        setActiveStatus(item) {
          this.activeStatus = item;
          console.log(this.activeStatus);
        },
     },
     created(){
       this.fetchLeaveRequest();
       this.fetchRequestStatus();
     }
};
</script>

