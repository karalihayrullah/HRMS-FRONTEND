import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider, Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <Container className="footer">
      <Divider />
      <br />

      <Grid>
        <Grid.Row centered>
          <List link horizontal>
            <List.Item as={NavLink} to="/home" content="Anasayfa" />
            <List.Item as={NavLink} to="/jobPostings" content="İş İlanları" />
            <List.Item as={NavLink} to="/candidates" content="İş Adayları" />
            <List.Item as={NavLink} to="/employers" content="İş Verenler" />
            
          </List>
        </Grid.Row>
        <Grid.Row centered>2022 ・ Hayrullah Karali</Grid.Row>
        <Grid.Row centered>
          <List link horizontal>
            <List.Item href="https://github.com/karalihayrullah" target="blank">
              <Icon name="github" size="large" />
            </List.Item>
            <List.Item href="https://www.linkedin.com/in/hayrullah-karali-90a53a209/" target="blank">
              <Icon name="linkedin" size="large" />
            </List.Item>
          </List>
        </Grid.Row>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
}
