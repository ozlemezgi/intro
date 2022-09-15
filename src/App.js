
import CatagoryList from './CatagoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
//import { Container, Row } from 'react-bootstrap';
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {

  state ={currentCategory:"" ,products :[]}

  componentDidMount(){ //component yerleşti
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  } //bu bir fonksiyondur 

  getProducts = ()=>{
    fetch("http://localhost:3000/products") //fetch ile bir api ye ulaşılabilir.
    .then(response=>response.json()) //gelen response için response u json a döndür.
    .then(data=>this.setState({products:data}));;
  };

  render() {
    let productInfo = { title: "Product List" } ;//bu da bir başka yazım şekli
    let categoryInfo = { title: "CatagoryList" };
    return (
      // jsx yapısı ; 
      <div>
        <Container>

          <Row>
            <Navi> </Navi>
          </Row>

          <Row>
            <Col xs="3"><CatagoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CatagoryList></Col>
            <Col xs="9"> <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo}></ProductList></Col>
          </Row>

        </Container>
        {/* <h2>Hello from react </h2>
      <h3>Deneme</h3>  */}

      </div>
      // <h3>Deneme</h3> //jsx kurallarına aykırı aynı hiyararşide iki ana component oluşturamazsın
    );

  }
}


