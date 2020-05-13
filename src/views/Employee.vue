<template>
  <div class="section">
    <div class="container">
    <div class="main">
      <div class="menu">
        <ul class="menu-list">
          <div class="menu-title">Employee List</div>
        </ul>
        <ul class="menu-list-right">
          <li class="menu-btn">
            <a href="#">Export CSV</a>
          </li>
          <li class="menu-btn">
            <a href="#">Export CSV (All)</a>
          </li>
          <li class="menu-btn">
            <a href="#">Import CSV</a>
          </li>
          <li class="menu-btn">
            <a href="#">Add New Employee</a>
          </li>
        </ul>
      </div>
      <div class="wrapper-col">
        <div class="col-big">
          <div class="box">
            <div class="box-title">
              <li class="menu-box active-2">
                <a href="#">Permanent</a>
              </li>
              <li class="menu-box">
                <a href="#">Export CSV (All)</a>
              </li>
              <li class="menu-box">
                <a href="#">Import CSV</a>
              </li>
            </div>

            <div class="box-table">
              <table class="table no-border">
                <tr class="no-border">
                  <td class="table-list">
                    <div class="table-inner">
                      <input type="text" placeholder="Type to search" class="textbox" />
                      <button class="textbox-btn">Search</button>
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class>
                          <img
                            src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt
                            class="img-thumb"
                          />
                        </a>
                      </div>
                      <div class="mar-1">
                        <a href="#" class="table-list-small-title">Sebastian Ingrosso</a>
                        <div class="table-list-small">exe@example.com</div>
                        <div class="table-list-small">081234567</div>
                      </div>
                    </div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small-title">Manager</div>
                    <div class="table-list-small">Research and Development</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
                  </td>
                </tr>


                <!-- <tr>
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class>
                          <img
                            src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt
                            class="img-thumb"
                          />
                        </a>
                      </div>
                      <div class="mar-1">
                        <a href="#" class="table-list-small-title">{{ item.name }}</a>
                        <div class="table-list-small">{{ item.email }}</div>
                        <div class="table-list-small">{{ item.phone }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="table-list">
                    <div class="table-list-small-title">{{ getRoleJobPosition(item) }}</div>
                    <div class="table-list-small">{{ getRoleJobDivition(item) }}</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
                  </td>
                </tr> -->

              </table>
            </div>
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
    data(){
        return{
            activeIdx: 0,
            filterName: '',
            menu: [{
                key: 'permanent',
                name: 'Permanent'
            },{
                key: 'probation',
                name: 'Probation'
            },{
                key: 'contract',
                name: 'Contract'
            },]
        }
    },
    computed:{
      ...mapGetters({
        employee: 'employee/employee',
        roleJob: 'employee/roleJob',
        employeeStatus: 'employee/employeeStatus'
      }),
      getEmployee(){
        return this.filterName === '' ? this.employee.filter(ob=>ob.status_employee === this.activeIdx) : this.employee.filter(ob=>ob.status_employee === this.activeIdx && ob.name.toLowerCase().includes(this.filterName.toLowerCase()));
      }
    },
    methods:{
        ...mapActions({
            fetchEmployees : 'employee/fetchEmployees',
            fetchRoleJob : 'employee/fetchRoleJob',
            fetchEmployeeStatus : 'employee/fetchEmployeeStatus'
        }),
        getRoleJobPosition(d){
            return this.roleJob.find(ob=>ob.id === d.role_job) ? this.roleJob.find(ob=>ob.id === d.role_job).position : ''
        },
        getRoleJobDivition(d){
            return this.roleJob.find(ob=>ob.id === d.role_job) ? this.roleJob.find(ob=>ob.id === d.role_job).divition : ''
        },
        getEmployeeStatus(a){
            return this.employeeStatus.find(ob=>ob.id == a.status_employee) ? this.employeeStatus.find(ob=>ob.id == a.status_employee).status : ''
        },
        prepareCsvData(a){
            let fix = []
            for(let i=0;i<a.length;i++){
                let temp = {
                    no: i+1,
                    name: a[i].name,
                    email: a[i].email,
                    phone: a[i].phone,
                    gender: a[i].gender,
                    birth_date: a[i].birth_date,
                    birth_place: a[i].birth_place,
                    position: this.getRoleJobPosition(a[i]),
                    divition: this.getRoleJobDivition(a[i]),
                    status_employee: this.getEmployeeStatus(a[i]),
                    password: a[i].password,
                }
                fix.push(temp);
            }
            return fix;
        },
        exportCsv(){
            this.exportingProcess(this.prepareCsvData(this.getEmployee));
        },
        exportAllCSV(){
            this.exportingProcess(this.prepareCsvData(this.employee));
        },
        exportingProcess(items){
            const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
            const header = Object.keys(items[0])
            let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
            csv.unshift(header.join(','))
            csv = csv.join('\r\n')
            let blob = new Blob(['\ufeff' + csv], { 
            type: 'text/csv;charset=utf-8;'
            }); 
            let dwldLink = document.createElement("a"); 
            let url = URL.createObjectURL(blob); 
            navigator.userAgent.indexOf('Chrome') == -1; 
            dwldLink.setAttribute("href", url); 
            dwldLink.setAttribute("download", "alltable.csv"); 
            dwldLink.style.visibility = "hidden"; 
            document.body.appendChild(dwldLink); 
            dwldLink.click(); 
            document.body.removeChild(dwldLink); 
        }
    },
  created() {
    this.fetchEmployees();
    this.fetchRoleJob();
    this.fetchEmployeeStatus();
  }
};
</script>

