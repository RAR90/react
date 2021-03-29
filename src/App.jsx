import React from 'react'
import MainMenu from './components/MainMenu'
import SideBar from './components/SideBar'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  render() {

    return (
      <div className="App">

        <MainMenu />

        <div className="wrapper">

          <SideBar />

          <div className="main-panel">
            <div className="panel-hedding">

              <div class="row">
                <div class="col-md-9 mb-3">
                  <h1>ATS Rules</h1>
                  <p>Laborum quos unde repellendus esse voluptates consequuntur quis ab ratione pariatur praesentium cumque ipsa. Tempore, sed ex.</p>
                </div>
                <div class="col-md-3">
                  <div class="add-new">
                    <a class="btn btn-primary" href="#!" data-toggle="modal" data-target="#exampleModal"> <i class="feather icon-plus"></i> Add ATS Rule</a>
                  </div>
                </div>
              </div>

              <div className="row">

                <div className="col-md-7">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table id="table-export" class="table table-striped table-bordered display nowrap">
                          <thead>
                            <tr>
                              <th>Percentual %</th>
                              <th>Critério 1</th>
                              <th>Critério 2</th>
                              <th>Descrição</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0.00</td>
                              <td>0</td>
                              <td>5</td>
                              <td>Menor que 5 anos</td>
                            </tr>
                            <tr>
                              <td>1.00</td>
                              <td>1</td>
                              <td>2</td>
                              <td>De 5 a 10 anos</td>
                            </tr>
                            <tr>
                              <td>2.50</td>
                              <td>2</td>
                              <td>3</td>
                              <td>De 10 a 15 anos</td>
                            </tr>
                            <tr>
                              <td>3.00</td>
                              <td>3</td>
                              <td>4</td>
                              <td>De 15 a 20 anos</td>
                            </tr>
                            <tr>
                              <td>3.00</td>
                              <td>3</td>
                              <td>4</td>
                              <td>De 20 a 30 anos</td>
                            </tr>
                            <tr>
                              <td>3.00</td>
                              <td>3</td>
                              <td>4</td>
                              <td>De 5 a 10 anos</td>
                            </tr>
                            <tr>
                              <td>3.00</td>
                              <td>3</td>
                              <td>4</td>
                              <td>Menor que 5 anos</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Percentual %</th>
                              <th>Critério 1</th>
                              <th>Critério 2</th>
                              <th>Descrição</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-5">
                  <div class="card">
                    <div class="card-title">
                      <div class="card-title-left">
                        <h4 class="card-title-text">History</h4>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="support-ticket">

                      <a class="ticket-item" href="#!">
                          <div class="avatar avatar-xl bg-soft-primary">
                            <span class="avatar-name text-primary">O2C</span>
                          </div>
                          <div class="ticket-info">
                            <span class="text-light ticket-customer">BRMacelBr</span>
                            <span class="badge badge-overlay-info">Uptaded</span>
                            <h5 class="title mt-2 w-100">ATS Rule "Menor que 5 anos"</h5>
                          </div>
                          <div class="ticket-time text-right">
                            <span><i class="la la-calendar-o"></i> 2 hours ago</span>
                          </div>
                        </a>

                        <a class="ticket-item" href="#!">
                          <div class="avatar avatar-xl bg-soft-primary">
                            <span class="avatar-name text-primary">O2C</span>
                          </div>
                          <div class="ticket-info">
                            <span class="text-light ticket-customer">BRMacelBr</span>
                            <span class="badge badge-overlay-danger">Deleted</span>
                            <h5 class="title mt-2">ATS Rule "44"</h5>
                          </div>
                          <div class="ticket-time text-right">
                            <span><i class="la la-calendar-o"></i> 2 hours ago</span>
                          </div>
                        </a>
                        <a class="ticket-item" href="#!">
                          <div class="avatar avatar-xl bg-soft-primary">
                            <span class="avatar-name text-primary">O2C</span>
                          </div>
                          <div class="ticket-info">
                            <span class="text-light ticket-customer">BRMacelBr</span>
                            <span class="badge badge-overlay-danger">Deleted</span>
                            <h5 class="title mt-2">ATS Rule "44"</h5>
                          </div>
                          <div class="ticket-time text-right">
                            <span><i class="la la-calendar-o"></i> 2 hours ago</span>
                          </div>
                        </a>
                        <a class="ticket-item" href="#!">
                          <div class="avatar avatar-xl bg-soft-primary">
                            <span class="avatar-name text-primary">O2C</span>
                          </div>
                          <div class="ticket-info">
                            <span class="text-light ticket-customer">BRMacelBr</span>
                            <span class="badge badge-overlay-danger">Deleted</span>
                            <h5 class="title mt-2">ATS Rule "44"</h5>
                          </div>
                          <div class="ticket-time text-right">
                            <span><i class="la la-calendar-o"></i> 2 hours ago</span>
                          </div>
                        </a>
                        <a class="ticket-item" href="#!">
                          <div class="avatar avatar-xl bg-soft-primary">
                            <span class="avatar-name text-primary">O2C</span>
                          </div>
                          <div class="ticket-info">
                            <span class="text-light ticket-customer">BRMacelBr</span>
                            <span class="badge badge-overlay-danger">Deleted</span>
                            <h5 class="title mt-2">ATS Rule "44"</h5>
                          </div>
                          <div class="ticket-time text-right">
                            <span><i class="la la-calendar-o"></i> 2 hours ago</span>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">



              <div className="col-12">
                <div className="form-group">
                  <label>Percentual %</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Critério 1</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Critério 2</label>
                  <input type="text" className="form-control"/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Descrição</label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>




              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;