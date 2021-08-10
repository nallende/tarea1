import React, { Component } from 'react';

class Tarea extends Component {
  eliminarTarea(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Tarea">
        <strong>{this.props.tarea.titulo}</strong>: {this.props.tarea.categoria} <a href="#" onClick={this.deleteProject.bind(this, this.props.tarea.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  tarea: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default Tarea;