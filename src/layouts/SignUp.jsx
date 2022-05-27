import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, Icon, Modal, Segment } from "semantic-ui-react";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };

  return (
    <span>
      <Button
        circular
        color="yellow"
        content="Kayıt Ol"
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
          <Icon name="paper plane" />
          Nasıl bir hesap açmak istiyorsunuz ?
        </Header>

        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="blue"
                  content="İş Arayan"
                  as={NavLink}
                  to={"/candidate/add"}
                  onClick={() => setOpen(false)}
                />
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
                  color="yellow"
                  content="İş Veren"
                  as={NavLink}
                  to={"/employer/add"}
                  onClick={() => setOpen(false)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </span>
  );
}
