//container component gets changed to presentational component purely as only one container component is maintained
// Maincomponent.js

import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';

class MenuComponent extends Component {

    constructor(props){
      super(props);
      console.log("1. Mounting - Menu Component constructor invoked");
    }
    
    componentDidMount(){
      console.log("4. Mounting - Menu Component componentDidMount invoked");
    }
      
    render() {

        console.log("2. Mounting - Menu Component getDerivedStatefromProps invoked");
        console.log("3. Mounting - Menu Component Render invoked");

        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card  onClick={()=>this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>  
                  </CardImgOverlay>
                  </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            </div>
        );
    }
}

export default MenuComponent;