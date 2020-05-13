<template>
  <div class="section">
    <div class="container">
    <div class="main">
      <div class="wrapper-col">
        <div class="col">
          <div class="box">
            <div class="box-title">Total Employees</div>
            <div class="box-text">000</div>
            <div class="box-desc">00 males / 00 females</div>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <div class="box-title">Out Today</div>
            <div class="box-thumb">
              <img
                src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
                class="img-thumb"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
                class="img-thumb"
              />
              <img
                src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
                class="img-thumb"
              />
              <img
                src="https://images.unsplash.com/photo-1552915170-71312ed421ce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
                class="img-thumb"
              />
              <img
                src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
                class="img-thumb"
              />
            </div>
            <div class="box-desc">0 people</div>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <div class="box-title">Today's Present</div>
            <div class="box-text-2">0
              <span class="text-gray-400">/10</span>
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper-col">
        <div class="col">
          <div class="box">
            <div class="box-title">Upcoming Events</div>
            <div class="box-table">
              <table class="table">
                <tr>
                  <td class="table-list icon-calendar icon"></td>
                  <td class="table-list">22 Maret</td>
                  <td class="table-list">Isra' Mi'raj</td>
                </tr>
                <tr>
                  <td class="table-list icon-calendar icon"></td>
                  <td class="table-list">25 Maret</td>
                  <td class="table-list">Nyepi</td>
                </tr>
                <tr>
                  <td class="table-list icon-calendar icon"></td>
                  <td class="table-list">21 April</td>
                  <td class="table-list">Kartini</td>
                </tr>
                <tr>
                  <td class="table-list icon-calendar icon"></td>
                  <td class="table-list">17 Agustus</td>
                  <td class="table-list">Kemerdekaan RI</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <div class="box-title">New Applicants</div>
            <div class="box-table">
              <table class="table">
                <tr>
                  <td class="table-list">
                    <img
                      src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt
                      class="img-thumb-small"
                    />
                  </td>
                  <td class="table-list">Sebastian Ingrosso</td>
                  <td class="table-list">Engineer</td>
                  <td class="table-list">1 day ago</td>
                </tr>
                <tr>
                  <td class="table-list">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt
                      class="img-thumb-small"
                    />
                  </td>
                  <td class="table-list">Steve Angello</td>
                  <td class="table-list">Trainer</td>
                  <td class="table-list">2 day ago</td>
                </tr>
                <tr>
                  <td class="table-list">
                    <img
                      src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt
                      class="img-thumb-small"
                    />
                  </td>
                  <td class="table-list">Axwell Alesso</td>
                  <td class="table-list">Journalist</td>
                  <td class="table-list">3 day ago</td>
                </tr>
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
export default {};
</script>

<style>
body {
    background: #f7fafc;
    font-family: 'Roboto', sans-serif;
    margin: 0;
}

img {
    width: 100%;
    height: auto;
}

.header {
    position: sticky;
    background: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
    z-index: 9;
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

.container {
    position: relative;
    z-index: 1;
}

/* .container:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 15rem;
    background-image: linear-gradient(rgb(0, 212, 80), rgb(0, 181, 68));
    z-index: -1;
    transform: skewY(-5deg);
} */

.section {
    width: 100%;
    /* position: relative; */
}

.section:before {
    content: '';
    position: absolute;
    top: -25%;
    width: 100%;
    height: 20rem;
    /* background: rgb(0, 212, 80); */
    background-image: linear-gradient(rgb(0, 212, 80), rgb(0, 181, 68));
    z-index: 1;
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
    padding: 10px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 2px;
    transition: all 0.5s ease;
}

.nav-btn:hover {
    background-color: #E8F5E9;
}

.nav-btn a {
    color: #333 !important;
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
    box-shadow: 2px 2px 0px 1px #4CAF50;
    height: 50px;
    width: 50px;
    transition: all 0.5s ease;
}

.logo a {
    color: #03A9F4;
    text-decoration: none;
    font-style: italic;
    line-height: 2.5;
    padding-left: 8px;
    text-shadow: 1px 1px 0px #03A9F4;
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
    padding: 0 !important;
    margin: 1rem;
    -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
    border-radius: 10px;
    background-color: #fff;
}

.col-big {
    width: 100%;
    -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);
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
    background-color: #F9FBE7;
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

.table-list-ctr {
    font-size: 14px;
    text-align: center;
    padding: 1rem;
}

.table-list-clr {
    font-size: 14px;
    text-align: center;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    border: 1px solid #e5e5e5;
}

.green {
    background-color: #00d450;
}

.red {
    background-color: #ef144a;
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

.table-list-status {
    background-color: #00d450;
    color: #fff;
    padding: 4px 10px;
    border-radius: 50px;
    display: initial;
    font-size: 11px;
}

.approved {
    background-color: #00d450;
}

.pending {
    background-color: #ffc107;
}

.rejected {
    background-color: #ef144a;
}

.mar-1 {
    margin-left: 1rem;
}

.table-inner {
    display: flex;
    padding-bottom: 1rem;
}

.img-thumb-small {
    width: 2rem;
    border-radius: 100%;
}

.menu {
    display: flex;
    padding: 0 20px;
}

.menu-title {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
    /* color: #666; */
    color: #fff;
    
}

.menu-list {
    margin: auto;
    flex-grow: 1;
    padding: 15px 0;
}

.menu-list-right {
    margin: auto;
    /* flex-grow: 1; */
    padding: 15px 0;
    flex-grow: initial;
    line-height: 2.5;
}

.menu-btn {
    font-size: 10px;
    padding: 10px 15px;
    margin-right: 5px;
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
    color: #fff !important;
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
    color: #666 !important;
    text-decoration: none;
}

.textbox {
    border-radius: 5px;
    border: 1px solid #ddd;
    padding-top: .25rem;
    padding-bottom: .25rem;
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
    background-color: #FFC107;
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
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
}

.textbox-btn-2:hover {
    background-color: #999;
}
</style>