import React,{useState} from 'react'
import { Button,Modal,Grid,Segment,Icon,Header} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';

export default function LogOut() {

    const [open, setOpen] = useState(false);

    const handleModal = (value) => {
        setOpen(value);
    };

    return (
        <span>
            <Button
                circular
                color="blue"
                content="Giriş Yap"
                onClick={() => handleModal(true)}
            />

            <Modal
                basic
                dimmer
                onClose={() => handleModal(false)}
                onOpen={() => handleModal(true)}
                open={open}
                size="small"
            >
                <Header icon as="h2" className="orbitron">
                    <Icon name="sign-in" />
                    Hangi tür hesapla giriş yapmak istiyorsunuz ?
                </Header>

                <Modal.Actions>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width="7">
                                <Button
                                    circular
                                    fluid
                                    color="green"
                                    content="İş Arayan"
                                    as={NavLink}
                                    to={"#"}
                                    onClick={() => setOpen(false)}
                                ></Button>
                            </Grid.Column>
                            <Grid.Column width="2">
                                <Segment basic className="or">
                                    veya
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width="7">
                                <Button
                                    circular
                                    fluid
                                    color="blue"
                                    content="İş Veren"
                                    as={NavLink}
                                    to={"#"}
                                    onClick={() => setOpen(false)}
                                ></Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Actions>
            </Modal>
            <SignUp />
        </span>
    )
}
