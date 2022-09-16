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
          <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
            { this.props.cart.map(cartItem => ( <DropdownItem key={cartItem.product.id}> {cartItem.product.productName} 
            <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>)) }
         
          <DropdownItem divider> 
          </DropdownItem>
          <DropdownItem>
            Reset
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
 