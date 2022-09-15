import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CatagoryList extends Component {
  state = {
    categories: []
  }

  //state bir componentin datasıdır
  //props bir componentten ötekine taşınan data yada eventtir.

  componentDidMount(){ //component yerleşti
    this.getCategories();
  }

  getCategories = ()=>{
    fetch("http://localhost:3000/categories") //fetch ile bir api ye ulaşılabilir.
    .then(response=>response.json()) //gelen response için response u json a döndür.
    .then(data=>this.setState({categories:data}));;
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3>
        {/* süslü parantez js kodu başlatmak için kullanılır */}
        <ListGroup>
          {
            this.state.categories.map(category => (
              <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
            ))
            //setstate statedeki herhangi bir nesnenin eğiştirlmesini sağlar
          }
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
