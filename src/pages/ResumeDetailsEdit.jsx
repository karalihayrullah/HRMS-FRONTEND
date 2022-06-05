import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import ResumeService from "../services/resumeService";
import ButtonsOfEdit from "../layouts/ButtonsOfEdit";
import { Container, Grid } from "semantic-ui-react";

export default function ResumeDetailsEdit() {
  let { id } = useParams();

  const [resume, setResume] = useState({});
  
  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getByCandidateId(id).then((result) => setResume(result.data.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Ozgecmis" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="5" />
            <Grid.Column width="6">
            <ButtonsOfEdit 
                content="Profil Resmi"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${id}/Image/update`}
                secondTo={`/candidates/resume/:id/Image/update`}
              />
              <ButtonsOfEdit 
                content="Link"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/link/add`}
                secondTo={`/candidates/resume/${resume.id}/link/delete`}
              />
              <ButtonsOfEdit
                content="Bilgilendirme"
                firstIcon="add"
                secondIcon="pencil alternate"
                firstTo={`/candidates/candidate/${id}/coverLetter/add`}
                secondTo={`/candidates/candidate/${id}/coverLetter/edit`}
              />
              <ButtonsOfEdit
                content="Eğitimler"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/education/add`}
                secondTo={`/candidates/resume/${resume.id}/education/delete`}
              />
              <ButtonsOfEdit
                content="Tecrübeler"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/experience/add`}
                secondTo={`/candidates/resume/${resume.id}/experience/delete`}
              />
              <ButtonsOfEdit
                content="Dil"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/languageLevel/add`}
                secondTo={`/candidates/resume/${resume.id}/languageLevel/delete`}
              />
              <ButtonsOfEdit
                content="Uzmanlık"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/skill/add`}
                secondTo={`/candidates/resume/${resume.id}/skill/delete`}
              />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
