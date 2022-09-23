import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,


} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Navi extends React.Component{
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state={
      isOpen: false

    };
  }
  toggle(){
    this.setState({
      isOpen :!this.state.isOpen
    });
  }

  render(){

   

    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sepetinizde  {this.props.cart.length} çeşit ürün bulunmaktadır</NavbarBrand>
          <NavItem>
                <Link to ="form1">Form Demo 1</Link>
              </NavItem>
          <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
    
        <DropdownMenu right>
            { this.props.cart.map(cartItem => ( <DropdownItem key={cartItem.product.id}> <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> x </Badge>{cartItem.product.productName} 
            <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>)) }
         
          <DropdownItem divider> 
          </DropdownItem>
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
          
        </DropdownMenu>
      </UncontrolledDropdown>
          <NavbarToggler> onClick={this.toggle}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href="components">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="components">Componentsss</NavLink>
              </NavItem>



            </Nav>


          </Collapse>
          </NavbarToggler>
        </Navbar>
      </div>
    );
  }

}

  
              {/* {this.props.cart.length} */}
 