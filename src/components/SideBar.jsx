import React from 'react';
// import ReactDOM from 'react-dom';
import appLogo from '../assets/img/system-logo.png';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: this.props.page};
  }

  active(page) {
    if(page === this.state.page) {
      return "nav-item active"
    }
    return "nav-item"
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-background"></div>
        <div className="sidebar-wrapper scrollbar-inner">
          <div className="sidebar-content">
            <div className="system-logo">
              <a href="/" className="logo float-left">
                <img src={appLogo} alt="navbar brand" />
              </a>
            </div>
            <ul className="nav">
              <li className="nav-section">
                <h4 className="text-section float-left w-100 pt-2 m-0 bg-white">Menú Principal </h4>
              </li>
              <li className={this.active('/')}>
                <a href="/">
                  <i className="fa fa-file-pdf-o"></i>
                  <p>Relatórios</p>
                </a>
              </li>
              <li className={this.active('busca')}>
                <a href="busca">
                  <i className="fa fa-search"></i>
                  <p>Busca</p>
                </a>
              </li>
              <li className={this.active('pendentes')}>
                <a href="pendentes">
                  <i className="fa fa-exclamation-circle"></i>
                  <p>Pendentes</p>
                  <span className="badge badge-count">5</span>
                </a>
              </li>
              <li className={this.active('')}>
                <a href="/" className="offf">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                  <p>Importação</p>
                </a>
              </li>
              <li className={this.active('')}>
                <a href="/" className="offf">
                  <i className="fa fa-pencil-square"></i>
                  <p>Registrar Manualmente</p>
                </a>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="la la-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Painel de Controle</h4>
              </li>
              <li className={this.active('')}>
                <a href="#base" className="offf">
                  <i className="fa fa-user-circle"></i>
                  <p>Usuários</p>
                </a>
              </li>
              <li className={this.active('')}>
                <a href="#base" className="offf">
                  <i className="fa fa-clock-o"></i>
                  <p>Gerencias Prazos</p>
                </a>
              </li>
              <li className={this.active('')}>
                <a href="#base" className="offf">
                  <i className="fa fa-database"></i>
                  <p>Importar Base</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;