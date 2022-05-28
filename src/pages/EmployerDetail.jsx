import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EmployerService from "./../services/employerService";
import Headline from "../layouts/Headline";
import JobPostingList from "./JobPostingList";
import { Container, Header, Grid, Divider, Icon} from "semantic-ui-react";

export default function EmployerDetail() {
  let { id, type } = useParams();

  const [employer, setEmployer] = useState({});

  let employerService = new EmployerService();  

  useEffect(() => {
    if (type == "employer") {
      employerService.getById(id).then((result) => setEmployer(result.data.data));
      
    }   
    
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Is Veren" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Grid.Row>
                
                 
              </Grid.Row>
              <Grid.Row>
                  <Header>
                  <span className="detail-header">
                    {employer.companyName}
                  </span>
                  </Header>
                  <Icon name="linkify" />
                  {employer.webAddress}
                  <br />
                  <Icon name="envelope" />
                  {employer.email}
                  <br />
                  <Icon name="phone" />
                  {employer.phoneNumber}
                  
                  
                  <Divider />
                  <br />  

                <JobPostingList type="byEmployer" itemsPerRow="2" id={id} />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
