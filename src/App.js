
import CatagoryList from './CatagoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from 'react'
//import { Container, Row } from 'react-bootstrap';
import { Container, Row, Col } from "reactstrap";
import { Route } from 'react-router-dom';
//import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { Switch , withRouter} from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';



export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [], }

  componentDidMount() { //component yerleşti
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    // console.log(category)
    this.getProducts(category.id);
    //changeCategory i çağırınca;
    //getProducs çağır
    //getProducs çağırlınca product state değişiyor
    //bu state'i product list kullandığı için yeniden render ediliyor..
  } //bu bir fonksiyondur 

  getProducts = (categoryId) => {

    let url = "http://localhost:3000/products";
    if (categoryId) { //seoUrl varsa anlamına gelir.(Defined)
      url += "?categoryId=" + categoryId; //Bu url'in sonuna ? ekle ve sonra categoryId i ekle demek yani url yi değiştirmiş olduk..
    }



    fetch(url) //fetch ile bir api ye ulaşılabilir.
      .then(response => response.json()) //gelen response için response u json a döndür.
      .then(data => this.setState({ products: data }));;
  };

  addToCart = (product) => {

    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 })
    }

    this.setState({ cart: newCart });


  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })

  }

  render() {
    let productInfo = { title: "Product List" };//bu da bir başka yazım şekli
    let categoryInfo = { title: "CatagoryList" };
    return (
      // jsx yapısı ; 
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}>


          </Navi>
          <Row>
            <Col xs="3"><CatagoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CatagoryList></Col>
            <Col xs="9">
              <Switch>
                {/* Switch sırası ile route ları gezmemizi sağlıyor */}
                <Route exact path="/" render={props => (
                  <ProductList {...props} products={this.state.products} addToCart={this.addToCart} currentCategory={this.state.currentCategory} info={productInfo}></ProductList>
                )

                }></Route>
                <Route exact path="/cart"
                render={props => (
                  <CartList {...props} 
                  cart={this.state.cart} 
                  removeFromCart={this.removeFromCart}>
                  </CartList>
                )}>
                </Route>

                <Route path="/form1" componenet={FormDemo1}></Route>

                <Route component={NotFound}></Route>
                {/* componentin değişmesini istediğimiz yer */}

              </Switch>




            </Col>



          </Row>

        </Container>
        {/* <h2>Hello from react </h2>
      <h3>Deneme</h3>  */}

      </div>
      // <h3>Deneme</h3> //jsx kurallarına aykırı aynı hiyararşide iki ana component oluşturamazsın
    );

  }
}


