<template>
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
          <router-link to="/attendance">ATTENDANCE</router-link>
        </li>
        <li class="nav-btn">
          <router-link to="/applicant">APPLICANTS</router-link>
        </li>
        <li class="nav-btn">
          <router-link to="/leave-request">LEAVE REQUEST</router-link>
        </li>
        <li class="nav-btn">
          <router-link to="/event">EVENT</router-link>
        </li>
        <li class="nav-btn">
          <router-link to="/broadcast">BROADCAST</router-link>
        </li>
        <li class="nav-btn-user">
          <span>
            <i class="icon-bell pad-6"></i>Hi, Admin
          </span>
        </li>
        <li class="nav-btn">
          <router-link to="/">LOGOUT</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>