import React, { Component } from 'react';
import uuid from 'uuid';

class AgregarTarea extends Component {
  constructor(){
    super();
    this.state = {
      nvaTarea:{}
    }
  }

  static defaultProps = {
    categories: ['Front End', 'Servidor', 'Base de Datos']
  }

  handleSubmit(e){
    if(this.titulo.value === ''){
      alert('Se debe Ingresar Titulo');
    } else {
      this.setState({nvaTarea:{
        id: uuid.v4(),
        title: this.titulo.value,
        category: this.categoria.value
      }}, function(){
        //console.log(this.state);
        this.props.agregarTarea(this.state.nvaTarea);
      });
    }
    e.preventDefault();
  }

  render() {
    let opcionesCategoria = this.props.categorias.map(categoria => {
      return <option key={categoria} value={categoria}>{categoria}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="texto" ref="titulo" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="categoria">
              {opcionesCategoria}
            </select>
          </div>
          <br />
          <input type="submit" value="Enviar" />
          <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categorias: React.PropTypes.array,
  agregarTarea: React.PropTypes.func
}

export default AgregarTarea;
