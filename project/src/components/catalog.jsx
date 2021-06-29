import React, { Component } from 'react';
import Item from './item';
import Item2 from './item2';
import Item3 from './item3';
import Item4 from './item4';
import Item5 from './item5';
import Item6 from './item6';
import Item7 from './item7';
import Item8 from './item8';
import Item9 from './item9';
import ItemService from './../services/itemService';
import "./catalog.css";

class Catalog extends Component {
    state = {
        items: [],
    };
    render() { 
        return ( 
            <div className="catalog-page">

                {this.state.items.map((x) => (
                    <Item></Item>
                ))}
                
            </div>
         );
    }
    //called after the render function is executed (after something has loaded onto the users screen)
    componentDidMount(){
        //call the service to get the list of items
        var service = new ItemService();
        var items = service.getCatalog();
        this.setState({items: items});
    }
}
 
export default Catalog;