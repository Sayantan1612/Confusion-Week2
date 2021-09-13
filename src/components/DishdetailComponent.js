//Presentational

import React, { Component } from 'react'
import {Card, CardBody, CardImg,CardText,CardTitle} from 'reactstrap';
export default class DishdetailComponent extends Component {
    
   
    componentDidMount(){
        console.log(" Mounting & updating- DishDetail Component componentDidMount invoked");
      }

    componentDidUpdate(){
        console.log(" Updating - DishDetail Component componentDidUpdate invoked - onClicking a pic");
    }  

    render() {
        
        console.log(" Mounting & updating- DishDetail Component render invoked");

        if(this.props.selectedDish != null)
        {
            const displayComments=this.props.selectedDish.comments.map((comm)=>{
                return(
                    <div key={comm.id}>
                        <h5>{comm.comment}</h5>
                        <h6>--{comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</h6>
                        <br></br>
                    </div>
                )
            })

            return(
                <div className="row">
                    <Card className="col-12 col-md-5 m-1">
                        <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                    <div  className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {displayComments}
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}
