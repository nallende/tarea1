import React, { Component } from 'react';
import ItemElemento from './compnents/elemento/elemento.component';

class Elementos extends Component {
  render() {
    let itemsElemento;
    if(this.props.elementos){
        itemsElemento = this.props.elementos.map(elemento => {
        //console.log(project);
        return (
          <TodoItem key={elemento.titulo} elemento={elemento} />
        );
      });
    }
    return (
      <div className="Elemento de Tarea">
        <h3>Lista</h3>
        {itemsElemento}
      </div>
    );
  }
}

Elementos.propTypes = {
  elementos: React.PropTypes.array
}

export default Elemnntos;
