import React, { Component } from 'react'
import InventoryList from './InventoryList';
import CartList from './CartList';

export default class InventoryApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            inventory: [
                {
                    name: "Apple",
                    count: 0,
                    id: 1
                },
                {
                    name: "Banana",
                    count: 0,
                    id: 2
                },
                {
                    name: "Peach",
                    count: 0,
                    id: 3
                }
            ],
            cart: []
        };
    }

    increaseInventory = (id)=>{
        const newInventory = this.state.inventory.map((item)=>{
            if(item.id===id){
                return {...item,count: item.count+1};
            }else{
                return item;
            }
        });
        const newState = {...this.state,inventory:newInventory};
        this.setState(newState);
    }

    decreaseInventory = (id)=>{
        const newInventory = this.state.inventory.map((item)=>{
            if(item.id===id&&item.count>0){
                return {...item,count: item.count-1};
            }else{
                return item;
            }
        });
        const newState = {...this.state,inventory:newInventory};
        this.setState(newState);
    }

    updateCart = (id)=>{
        let updatedItem;
        const newInventory = this.state.inventory.map((item)=>{
            if(item.id===id){
                updatedItem = {...item};
                return {...item,count: 0};
            }else{
                return item;
            }
        });
        const updateItem = this.state.cart.find((item)=>item.id===id);
        let newCart;
        if(updateItem){
            //item exist, update
            const newItem = {...updateItem,count:updateItem.count+updatedItem.count};
            newCart = this.state.cart.map((item)=>{
                if(item.id===id){
                    return newItem;
                }else{
                    return item;
                }
            });
        }else{
            //item not exist, create
            newCart = [...this.state.cart,updatedItem];
        }
        const newState = {...this.state,inventory:newInventory,cart:newCart};
        this.setState(newState);
        //console.log("state",this.state.cart);
    }

    render() {
        return (
        <div>
            <InventoryList inventory = {this.state.inventory} updateCart={this.updateCart} increaseInventory={this.increaseInventory} decreaseInventory={this.decreaseInventory}/>
            <CartList cart = {this.state.cart} />
        </div>
        )
    }
}
