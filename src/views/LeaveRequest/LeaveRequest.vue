<template>
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
              <li class="menu-box active-2">
                <a href="#">All</a>
              </li>
              <li class="menu-box">
                <a href="#">Approved</a>
              </li>
              <li class="menu-box">
                <a href="#">Pending</a>
              </li>
              <li class="menu-box">
                <a href="#">Rejected</a>
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
                <tr v-for="item in getLeaveRequest" :key="item.id"  >
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class=""><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="img-thumb"></a>
                      </div>
                      <div class="mar-1">
                        <a href="#" class="table-list-small-title">{{item.employee_name}}</a>
                        <div class="table-list-small">{{item.information}}</div>
                        <div class="table-list-small">{{item.status}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small-title">{{item.position}}</div>
                    <div class="table-list-small">{{item.department}}</div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small">Leave at {{item.start_date}}</div>
                    <div class="table-list-status">{{item.status}}</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
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
export default {
     data() {
      return {
          dialog:false

      }
     },
     computed:{
       ...mapGetters({
         getLeaveRequest:"getLeaveRequest"
       }),
       getDataLeaveRequest(){
         return this.getLeaveRequest;
       }
     },
     methods:{
       ...mapActions({
         fetchLeaveRequest:"fetchLeaveRequest"
       })
     },
     created(){
       this.fetchLeaveRequest();
     }
};
</script>

