import React, { Component } from 'react';

class ItemElemento extends Component {
  render() {
    return (
      <li className="Elemento">
        <strong>{this.props.itemElemento.titulo}</strong>
      </li>
    );
  }
}

ItemElemento.propTypes = {
  itemElemento: React.PropTypes.object
}

export default Elemento;