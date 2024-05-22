import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {name,count} = this.props.item
    return (
      <div>
        {name} {count}
      </div>
    )
  }
}
