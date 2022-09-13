import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CatagoryList extends Component {
  constructor(props){
    super(props);
    state:{}
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3> 
        {/* süslü parantez js kodu başlatmak için kullanılır */}
        <ListGroup>
          <ListGroupItem>item 1</ListGroupItem>
          <ListGroupItem>item 2</ListGroupItem>
          <ListGroupItem>item 3</ListGroupItem>
          <ListGroupItem>item 4</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
