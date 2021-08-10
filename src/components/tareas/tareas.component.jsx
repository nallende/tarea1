import React, { Component } from 'react';
import Tarea from './compnents/tarea/tarea.component';

class Tareas extends Component {
 eliminarTarea(id){
    this.props.onDelete(id);
  }

  render() {
    let itemsTarea;
    if(this.props.tareas){
        itemsTarea = this.props.tareas.map(tarea => {
        //console.log(tarea);
        return (
          <TareaItem onDelete={this.eliminarTarea.bind(this)} key={tarea.titulo} project={tarea} />
        );
      });
    }
    return (
      <div className="Tareas">
        <h3>Tareas Recientes</h3>
        {itemsTarea}
      </div>
    );
  }
}

Projects.propTypes = {
  tareas: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Tareas;
