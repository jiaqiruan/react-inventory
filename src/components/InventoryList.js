import React, { Component } from 'react'
import InventoryItem from './InventoryItem';

export default class InventoryList extends Component {
  
  render() {
    const inventory = this.props.inventory;
    return (
      <div>
        <div>
          {inventory.map((item)=>{
            return <InventoryItem key={item.id} item={item} updateCart={()=>this.props.updateCart(item.id)}increaseInventory={()=>this.props.increaseInventory(item.id)} decreaseInventory={()=>this.props.decreaseInventory(item.id)}/>
          })}
        </div>
      </div>
    )
  }
}
