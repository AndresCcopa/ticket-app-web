import React from 'react';
import { browserHistory } from 'react-router-3';
import MENU from './Data-Menu';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import TableHeaderMenuList from './Table-Header-MenuList'
import '../App.css';
import ComidaDiaModal from './ComidaDiaModal'; //modal comida por dia
import swal from 'sweetalert'


class VistaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      modalOption: false, //apertura del modal
      modalComida: ''
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.MenuNuevo = this.MenuNuevo.bind(this);
    this.SeleccionFechaDel = this.SeleccionFechaDel.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  MenuNuevo = (e) => {

    browserHistory.push('/Vista/MenuNuevo');
    console.log("VISTA MENU NUEVO");
    e.preventDefault();

  }
  SeleccionFechaDel(Fecha) {
    console.log("fecha para buscar menu")
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fecha: fecha1 });

  }

  // capturamos lo seleccionado de Menu.Semana.js
  modalSelectedOption = (comida) => {
    this.setState(()=>({ 
      modalComida: comida, 
      modalOption: true }))
  }
  //cerramos el modal
  modalClearOption = () => {
    this.setState( () => ({ modalOption: false}) );
   
  }

  render() {


    return (

      <div className="">
        <nav>
    <div class="nav-wrapper azul">
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a >Menu de la semana</a></li>
        <li><a >Busqueda</a></li>
        <li><a onClick={this.CerrarSesion} ><i className="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>
 
        <div className="menu row">
          <div className=" col-xs-4">
            <h4>Menu<i className="material-icons logo1">restaurant</i></h4>
          </div>
          <div className="col-xs-8 margen_top">
          </div>
      </div>
 
      
        <hr />
        <div className="SplitPane row">
          <div className="col-xs-8" margen_top>
            <div className="SplitPane row">
              <div className="col-xs-2 margen_top">
                <p className="margen_top">Fecha:</p>
              </div>
              <div className="col-xs-5 margen_top">
                <FiltroFecha Fechas={this.SeleccionFechaDel} />
              </div>
              <div className=" col-xs-5 margen_top" >
                <button className="waves-effect waves-light btn-large botonazul2 right" type="submit">Buscar<i className="material-icons left">search</i></button>
              </div>
            </div>
          </div>
          <div className=" col-xs-4 margen_top">
            
            <button onClick={this.MenuNuevo} className="waves-effect waves-light btn-large botonazul2 right" type="submit">Crear Menu<i className="material-icons left">restaurant</i></button>
            
          </div>
        </div>
        <div className=" margen_top" ><h3>Menu de la Semana</h3></div>
        <div className="SplitPane row center-xs">
          <div className="  center-xs-12">
            <table className=" total table ">
              <TableHeaderMenuList />
              <MenuList 
                listado={MENU}
                modalSelectedOption={this.modalSelectedOption} /*metodo de captura de datos*//>
            </table>
            <ComidaDiaModal
              modalOption={this.state.modalOption}
              modalComida={this.state.modalComida}
              modalClearOption={this.modalClearOption}
              modalComida={this.state.modalComida}/>
          </div>
        </div>
      </div>
    );
  }
}

export default VistaPrincipal;