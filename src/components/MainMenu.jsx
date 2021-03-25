import React from 'react';
// import ReactDOM from 'react-dom';
import companyLogo from '../assets/img/nestle.png';
import profileImage from '../assets/img/profile.jpg';

class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return (
      <div className="main-header">
        <div className="logo-header">
          <a href="/" className="main-logo p-0 m-0">
            {/* <img src={companyLogo} alt="logo img" className="logo-img" /> */}
          </a>
          <a href="/" className="logo float-left">
            <img src={companyLogo} alt="navbar brand" className="navbar-brand" width="115" />
          </a>
          <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <i className="la la-bars"></i>
            </span>
          </button>
          <button className="topbar-toggler more"><i className="la la-ellipsis-v"></i></button>
        </div>

        <nav className="navbar navbar-header navbar-expand-lg br-grey">
          <div className="container-fluid">
            <div className="navbar-minimize">
              <button className="btn btn-minimize btn-rounded">
                <i className="la la-navicon"></i>
              </button>
            </div>
            <div className="collapse" id="search-nav">
              <form className="navbar-left navbar-form nav-search ml-md-3 mr-md-3">
                <div className="input-group">
                  <input type="text" placeholder="Search ..." className="form-control" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-search">
                      <i className="la la-search search-icon"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item toggle-nav-search hidden-caret">
                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                  <i className="flaticon-search-1"></i>
                </a>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a className="nav-link dropdown-toggle" href="/" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="flaticon-alarm"></i>
                  <span className="notification">3</span>
                </a>
                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                  <li>
                    <div className="dropdown-title">You have 4 new notification</div>
                  </li>
                  <li>
                    <div className="notif-center">
                      <a href="/">
                        <div className="notif-icon notif-primary"> <i className="la la-user-plus"></i> </div>
                        <div className="notif-content">
                          <span className="block">
                            New user registered
                          </span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="/">
                        <div className="notif-icon notif-success"> <i className="la la-comment"></i> </div>
                        <div className="notif-content">
                          <span className="block">
                            Rahmad commented on Admin
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="/">
                        <div className="notif-img">
                          <img src={profileImage} alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="block">
                            Reza send messages to you
                          </span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="/">
                        <div className="notif-icon notif-danger"> <i className="la la-heart"></i> </div>
                        <div className="notif-content">
                          <span className="block">
                            Farrah liked Admin
                          </span>
                          <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="/">See all notifications<i className="la la-angle-right"></i> </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#expand" aria-expanded="false"> <img src={profileImage} alt="profile.jpg" width="36" className="img-circle" /></a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <li>
                    <div className="user-box">
                      <div className="u-img"><img src={profileImage} alt="profile.jpg" /></div>
                      <div className="u-text">
                        <h4>Rafael</h4>
                        <p className="text-muted">hello@vercel.com</p><a href="profile" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">My Profile</a>
                    <a className="dropdown-item" href="/">My Balance</a>
                    <a className="dropdown-item" href="/">Inbox</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Account Setting</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Logout</a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default MainMenu;