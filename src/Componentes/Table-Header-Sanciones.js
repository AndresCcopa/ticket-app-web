import React from 'react'

class TableHeaderSanciones extends React.Component {

  render() {
    return(
    <thead>
			<tr>       
                <th className="th3">Nombre</th>           
                <th className="th3">Codigo</th>
                <th className="th3">Fecha-Inicio</th>
                <th className="th3">Fecha-Fin</th>
                <th className="th3">Nombre Sancion</th>
              
            </tr>
	  </thead>
    )
  }
}

export default TableHeaderSanciones;