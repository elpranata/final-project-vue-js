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
              <table class="table no-border">
                <tr class="no-border">
                  <td class="table-list">
                    <div class="table-inner">
                      <input type="text" placeholder="Type to search" class="textbox">
                      <button class="textbox-btn">Search</button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class=""><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="img-thumb"></a>
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
                    <div class="table-list-small">Leave at 20 June 2020</div>
                    <div class="table-list-status approved">Approved</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class=""><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="img-thumb"></a>
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
                    <div class="table-list-small">Leave at 20 June 2020</div>
                    <div class="table-list-status pending">Pending</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td class="table-list">
                    <div class="table-list-inner">
                      <div class="table-list-thumb">
                        <a href="#" class=""><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="img-thumb"></a>
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
                    <div class="table-list-small">Leave at 20 June 2020</div>
                    <div class="table-list-status rejected">Rejected</div>
                  </td>
                  <td class="table-list">
                    <a href="#" class="textbox-btn-2">Edit</a>
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

