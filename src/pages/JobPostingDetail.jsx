import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Header, Grid, Divider, Icon, Label} from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";

export default function JobPostingDetail() {
  let { id } = useParams();

  const [jobPosting, setJobPosting] = useState({});
  const [open, setOpen] = useState(false);

  const history = useHistory();

  let jobPostingService = new JobPostingService();

  useEffect(() => {
    jobPostingService.getById(id).then((result) => setJobPosting(result.data.data));
  }, []);

  const handleModal = (value) => {
    setOpen(value);
  };


  return (
    <div>
      <Container className="content">
        <Headline content="Is Ilanı" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Grid.Row>
                <DateLabel value={new Date(jobPosting.postingDate).toDateString()} />
                <br /><br /><br />               
              </Grid.Row>
              <Grid.Row>                                 
                <Header>
                  <span className="detail-header">
                    <strong>{jobPosting.jobTitle?.title}</strong>
                  </span>
                </Header>
                {jobPosting.employer?.companyName}
                <br />
                <Icon name="linkify" />
                {jobPosting.employer?.webAddress}
                <br />
                <Icon name="envelope" />
                {jobPosting.employer?.email}
                <br />
                <Icon name="phone" />
                {jobPosting.employer?.phoneNumber}
                <Divider />
                <br />

                {jobPosting.jobDescription}
                <br /><br />
                <ul>
                  <li>
                    <strong>Şehir :</strong>
                    &nbsp;&nbsp;
                    {jobPosting.city?.city}
                  </li>
                  <li>
                    <strong>Çalışma Zamanı :</strong>
                    &nbsp;&nbsp;
                    {jobPosting.workingTime?.time}
                  </li>
                  <li>
                    <strong>Çalışma Şekli :</strong>
                    &nbsp;&nbsp;
                    {jobPosting.workingType?.type}
                  </li>
                  <li>
                    <strong>Min Maaş :</strong>
                    &nbsp;&nbsp;
                    {jobPosting.salaryMin}
                  </li>
                  <li>
                    <strong>Max Maaş :</strong>
                    &nbsp;&nbsp;
                    {jobPosting.salaryMax}
                  </li>
                  <li>
                    <strong>Açık pozisyon sayısı :</strong>
                    &nbsp;&nbsp;
                    <Label circular color="pink" className="orbitron">
                      {jobPosting.numberOfOpenPositions}
                    </Label>
                  </li>
                  <br />
                </ul>
                  
                <Label circular basic color="yellow" size="large">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width="2" />
                      <Grid.Column width="2">
                        <Icon name="calendar alternate outline" size="big" />
                      </Grid.Column>
                      <Grid.Column width="10">
                        <span className="orbitron">
                          Bitiş Tarihi
                          <br />
                          {new Date(jobPosting.closingDate).toDateString()}
                        </span>
                      </Grid.Column>
                      <Grid.Column width="2" />
                    </Grid.Row>
                  </Grid>
                </Label>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => history.push(`/employers/employer/${jobPosting.employer.id}`)} onOpen={() => handleModal(true)} open={open} content="Made passive !" />
      </Container>
    </div>
  );
}
