import React from 'react';
import CatagoryList from './CatagoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css"
//import { Container, Row } from 'react-bootstrap';
import {Container ,Row ,Col} from "reactstrap";


function App() {
  return (
    // jsx yapısı ; 
    <div>
      <Container>

        <Row> 
        <Navi> </Navi>
        </Row>

        <Row>
          <Col xs ="3"><CatagoryList></CatagoryList></Col>
          <Col xs ="9"> <ProductList></ProductList></Col> 
        </Row>

      </Container>
      {/* <h2>Hello from react </h2>
      <h3>Deneme</h3>  */}

    </div>
    // <h3>Deneme</h3> //jsx kurallarına aykırı aynı hiyararşide iki ana component oluşturamazsın
  );
}

export default App;
