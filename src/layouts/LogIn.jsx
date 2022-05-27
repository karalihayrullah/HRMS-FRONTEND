import React from "react";
import { Menu} from "semantic-ui-react"
import { Nav, NavDropdown,Image } from "react-bootstrap";

export default function LogIn(props) {

  return (
    <div>
      <Menu.Item fitted>
        <Image  size="mini" src="https://d3heiv85u05n2u.cloudfront.net/images/brands/3893_original.jpg?1500881329"></Image>


        <Nav >
          <NavDropdown 
            id="nav-dropdown-dark-example"
            title="Hayrullah"
            menuVariant="white"
          >
            <NavDropdown.Item icon="info" >Profil</NavDropdown.Item >
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={props.signOut} icon="sign-out" >Çıkış yap</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Menu.Item>

    </div>



  )
}

