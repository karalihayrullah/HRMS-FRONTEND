import React from "react";
import { Grid, Divider, Segment, Header} from "semantic-ui-react"
import { Image } from "react-bootstrap";

export default function HighlightedContent() {
  return (
    <Grid >
      <Grid.Row stretched columns="2">
        <Grid.Column>
          <Image className="highlightedContentImage" src="https://technobase.in/assets/img/hrms.svg" />
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color="blue" textAlign="right">
              <span className="headline-2">İş Arıyorsan</span>
            </Header>
            <br />
            <Header color="green" textAlign="right">
              <span className="headline-1">Doğru Yerdesin</span>
              
            </Header>
          </Segment>
          
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
