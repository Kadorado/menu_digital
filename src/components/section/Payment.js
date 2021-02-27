import React, { Component } from 'react'
import {DataContext} from "../Context"


const API_WHATSAPP = "https://wa.me/573006368229?text="



export class Payment extends Component {
    
    static contextType = DataContext;


    render() {
        const { cart, total } = this.context;
        return (
            <div>
                <h2 style={{textAlign: "center"}}>Pago</h2>
                <h2 style={{textAlign: "center"}}>Tu pedido </h2>
            </div>
        )
    }
}

export default Payment
