import React, { useState } from "react";
import { Formik,useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function EmployerAdd() {
  const [open, setOpen] = useState(false);


  const initialValues = {
    companyName: "",
    phoneNumber: "",
    webAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Boş Bırakılamaz"),
    phoneNumber: Yup.string().length(11,"Doğru Formatta Girdiğinizden Emin Olunuz.").required("Boş Bırakılamaz"),
    webAddress: Yup.string().required("Boş Bırakılamaz"),
    email: Yup.string().email("Email uygun değil").required("Boş Bırakılamaz"),
    password: Yup.string().required("Boş Bırakılamaz"),
    confirmPassword: Yup.string().required("Boş Bırakılamaz"),
  });

  const onSubmit = (values, { resetForm }) => {
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
        <Headline content="Kayit Ol" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="companyName"
                    label="Şirket Adı"
                    onChange={(event, data) => handleChange("companyName", data.value)}
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.companyName} /><br /><br /></span>}
                  <Form.Input
                    name="phoneNumber"
                    label="Telefon Numarası"
                    placeholder="0 555 123 45 67"
                    onChange={(event, data) => handleChange("phoneNumber", data.value)}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.phoneNumber} /><br /><br /></span>}
                  <Form.Input
                    name="webAddress"
                    label="Web Adresi (E-mail domaini ile şirket ismi aynı olmalıdır.)"
                    placeholder="example.com"
                    onChange={(event, data) => handleChange("webAddress", data.value)}
                    value={formik.values.webAddress}
                  />
                  {formik.errors.webAddress && formik.touched.webAddress && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.webAddress} /><br /><br /></span>}
                  <Form.Input
                    name="email"
                    label="E-mail"
                    placeholder="example@example.com"
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.email} /><br /><br /></span>}
                  <Form.Input
                    name="password"
                    label="Şifre"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /><br /></span>}
                  <Form.Input
                    name="confirmPassword"
                    label="Şifre Tekrarı"
                    onChange={(event, data) => handleChange("confirmPassword", data.value)}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.confirmPassword} /><br /></span>}
                  <br />

                  <Button circular fluid type="submit" color="yellow" content="Kayıt Ol" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="An activation e-mail has been sent !" />
      </Container>
    </div>
  );
}
