import React, { Component, createContext } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state ={}

    render(){
        return(
            <div className="item">
                <img src="data:image/jpeg;base64,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" alt="item" />
                <h6>Sony Playstation</h6>
                <label>Total: $0.00 </label>
                <label>Price: $200.0</label>
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-primary">Add</button>
            </div>
        );
    }
}

export default Item;