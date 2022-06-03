import React from "react";
import {Dropdown,Icon, Menu } from "semantic-ui-react";
import { useHistory, Link } from "react-router-dom";

import "reactjs-popup/dist/index.css";
import {useDispatch, useSelector} from "react-redux";
import { userLogout } from "../redux/actions/authActions"

export default function SignedIn() {

  const {authItem } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const history = useHistory();

  const handleLogout = (user) => {
    dispatch(userLogout(user))
    history.push("/")
}

  return (
    <div>
            <Menu.Item>
                <Dropdown style={{ fontWeight: 'bold', textTransform: 'uppercase' }} pointing="top right" text={authItem[0].user.name}>
                    <Dropdown.Menu style={{ marginTop: '25px' }}>
                        {authItem[0].user.userType === 1 && <Dropdown.Item as={Link} to={`/candidates/candidate/profile/update`}><Icon name='edit' />Profili güncelle</Dropdown.Item>}
                        {authItem[0].user.userType === 2 && <Dropdown.Item as={Link} to={`/employers/employer/profile/update`}><Icon name='edit' />Profili düzenle</Dropdown.Item>}
                        <Dropdown.Item onClick={() => handleLogout(authItem[0].user)}><Icon name='sign-out' /> Çıkış yap</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>


  )
}

