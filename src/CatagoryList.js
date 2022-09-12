import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CatagoryList extends Component {
  render() {
    return (
      <div>
        <h3>Catagory List</h3>
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
