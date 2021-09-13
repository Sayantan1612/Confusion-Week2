//container component

import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';

export default class ContainerComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null,
    }
  }

  onSelectedDish(dishId){
    this.setState({selectedDish:dishId});
  }
 

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} onClick={(dishId)=>this.onSelectedDish(dishId)}/>
        <DishdetailComponent selectedDish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}