import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Applicant from '../views/Applicant/Applicant.vue'
import AddApplicant from '../views/Applicant/AddApplicant.vue'
import Employee from '../views/Employee.vue'
import Attendance from '../views/Attendance.vue'
import Broadcast from '../views/Broadcast.vue'
import LeaveRequest from '../views/LeaveRequest.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/applicant',
    name: 'Applicant',
    component: Applicant
  },
  {
    path: '/add-applicant',
    name: 'AddApplicant',
    component: AddApplicant
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: Attendance
  },
  {
    path: '/broadcast',
    name: 'Broadcast',
    component: Broadcast
  },
  {
    path: '/leave-request',
    name: 'LeaveRequest',
    component: LeaveRequest
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router