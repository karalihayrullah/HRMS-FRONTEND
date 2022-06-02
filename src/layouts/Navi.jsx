import React from 'react'
import { NavLink,Link } from "react-router-dom";
import { Menu, Container, Header,Button,Icon } from "semantic-ui-react";    
import SignedIn from '../layouts/SignedIn';
import SignedOut from "../layouts/SignedOut";
import {useSelector} from "react-redux";

export default function Navi() {

    const {authItem} =useSelector(state => state.auth)

    
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
                <Menu.Menu position="right" style={{ margin: '0.5em' }}>
                        {authItem[0].loggedIn && authItem[0].user.userType === 2 && <Button primary style={{ lineHeight: "20px", borderRadius: '25px' }} as={Link} to={"/jobAdCreate"}>
                            <span>YENİ İLAN + </span>
                        </Button>}
                        {authItem[0].loggedIn && authItem[0].user.userType === 1 && <Button color="red" as={Link} to={`/jobAdFavorites`} style={{ lineHeight: "20px", borderRadius: '25px' }}>
                            <Icon name='heart' />
                            Favori İlanlar
                        </Button>}

                        {authItem[0].loggedIn ? <SignedIn/>: <SignedOut/>}
                    </Menu.Menu>
            </Container>
        </Menu>
    )
}
