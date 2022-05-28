import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import ExperienceService from "./../services/experienceService";
import JobTitleService from "./../services/jobTitleService";
import ResumeService from "./../services/resumeService";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function ExperienceAdd() {
  let { id } = useParams();

  const [jobTitles, setJobTitles] = useState([]);
  const [open, setOpen] = useState(false);

  let experienceService = new ExperienceService();
  let jobTitleService = new JobTitleService();
  let resumeService = new ResumeService();

  useEffect(() => {
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle,
  }));

  const initialValues = {
    resume: {id: id},
    companyName: "",
    jobTitle: "",
    startingDate: "",
    terminationDate: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Boş Bırakılamaz"),
    jobTitle: Yup.object().required("Boş Bırakılamaz"),
    startingDate: Yup.date().required("Boş Bırakılamaz"),
    terminationDate: Yup.date("Boş Bırakılamaz"),
  });

  const onSubmit = (values, { resetForm }) => {
    experienceService.add(values);
    resumeService.update({id: id});
    console.log(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Tecrübe Ekle" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="companyName"
                    label="Şirket İsmi"
                    onChange={(event, data) => handleChange("companyName", data.value)}
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.companyName} /><br /><br /></span>}
                  <Form.Select
                    name="jobTitle"
                    label="Ünvan"
                    options={jobTitleOptions}
                    onChange={(event, data) => handleChange("jobTitle", data.value)}
                    value={formik.values.jobTitle}
                  />
                  {formik.errors.jobTitle && formik.touched.jobTitle && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.jobTitle} /><br /><br /></span>}
                  <Form.Group widths="equal">
                    <Form.Input
                      name="startingDate"
                      label="Başlangıç Tarihi"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("startingDate", data.value)}
                      value={formik.values.startingDate}
                    />
                    <Form.Input
                      name="terminationDate"
                      label="Bitiş Tarihi "
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("terminationDate", data.value)}
                      value={formik.values.terminationDate}
                    />
                  </Form.Group>
                  <Grid>
                    <Grid.Row columns="2">
                      <Grid.Column>
                        {formik.errors.startingDate && formik.touched.startingDate && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.startingDate} /><br /></span>}
                      </Grid.Column>
                      <Grid.Column>
                        {formik.errors.terminationDate && formik.touched.terminationDate && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.terminationDate} /><br /></span>}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <br />

                  <Button circular fluid type="submit" color="yellow" content="Ekle" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Eklendi !" />
      </Container>
    </div>
  );
}
