import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import { Menu, Container, Header } from "semantic-ui-react";    
import LogIn from './LogIn';
import LogOut from './LogOut';

export default function Navi() {

    const [isAuthenticated, setIsAuthnticated] = useState(true)

    function handleSignOut(){
        setIsAuthnticated(false)
    }
    function handleSignIn(){
        setIsAuthnticated(true)
    }

    return (
        
        <Menu borderless fixed="top">
            <Container>
                <Menu.Item color="violet" position="left">
                    <Header as="h4" color="violet" className="orbitron" icon="cube" content="HRMS" />
                </Menu.Item>
                <Menu.Item as={NavLink} to="/home" icon="home" content="ANASAYFA" />
                <Menu.Item as={NavLink} to="/jobPostings" icon="list alternate outline" content="İŞ İLANLARI" />
                <Menu.Item as={NavLink} to="/candidates" icon="user outline" content="İŞ ADAYLARI" />
                <Menu.Item as={NavLink} to="/employers" icon="building outline" content="İŞ VERENLER" />
                <Menu.Menu position="right"  >
                    <Menu.Item position="right" fitted>
                        {isAuthenticated?<LogIn signOut={handleSignOut}/>:<LogOut signIn={handleSignIn}/> }
                    </Menu.Item>
                    
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
