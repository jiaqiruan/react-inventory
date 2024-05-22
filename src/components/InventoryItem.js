import React, { Component } from 'react'

export default class InventoryItem extends Component {
  render() {
    const {name,count} = this.props.item;
    return (
      <div>
        {name} <button onClick={this.props.increaseInventory}>+</button> {count} <button onClick={this.props.decreaseInventory}>-</button> <button onClick={this.props.updateCart}>Add</button>
      </div>
    )
  }
}
