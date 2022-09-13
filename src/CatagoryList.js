import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CatagoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],

    
  }

  //state bir componentin datasıdır
  //props bir componentten ötekine taşınan data yada eventtir.

 

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        {/* süslü parantez js kodu başlatmak için kullanılır */}
        <ListGroup>
          {
            this.state.categories.map(category => (
              <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
            ))
            //setstate statedeki herhangi bir nesnenin eğiştirlmesini sağlar
          }
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
