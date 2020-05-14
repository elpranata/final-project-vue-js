<template>
  <div class="section">
    <div class="container">
    <div class="main">
      <div class="menu">
        <ul class="menu-list">
          <div class="menu-title">Edit Employee</div>
        </ul>
        <ul class="menu-list-right">
          <li class="menu-btn">
            <a href="#">Save</a>
          </li>
          <li class="menu-btn">
            <router-link to="/employee">Cancel</router-link>
          </li>
        </ul>
      </div>
      <div class="wrapper-col">
        <div class="col-big">
          <div class="box">
            <div class="box-title">
              <li class="menu-box active-2">
                <a href="#">Profile</a>
              </li>
              <li class="menu-box">
                <a href="#">Occupation</a>
              </li>
              <li class="menu-box">
                <a href="#">Address</a>
              </li>
              <li class="menu-box">
                <a href="#">Emergency Contacts</a>
              </li>
            </div>

            <div class="box-table">
              <table class="table-profile no-border">
                <tr class="no-border">
                  <td class="table-list">
                    <div class="table-inner flex-col">
                      <input type="text" placeholder="Name" class="textbox input-col" />
                      <input type="text" placeholder="Email" class="textbox input-col" />
                      <input type="text" placeholder="Phone" class="textbox input-col" />
                      <input type="text" placeholder="Birth date" class="textbox input-col" />
                      <div class="avatar">
                        <a href="#" class>
                          <img
                            src="https://api.adorable.io/avatars/285/abott@adorable.png"
                            alt
                            class="img-thumb-2"
                          />
                        </a>
                          <input type="file" placeholder="Phone" class="choose-file" />
                      </div>
                    </div>
                  </td>
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