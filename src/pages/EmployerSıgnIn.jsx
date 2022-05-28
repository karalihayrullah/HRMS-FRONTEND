import React, { useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function EmployerSıgnIn() {
    let { companyName, password } = useParams();

    const [open, setOpen] = useState(false);


    const initialValues = {
        companyName: { companyName: companyName },
        passwordd: {password: password},
    };

    const validationSchema = Yup.object({
        companyName: Yup.string().required("Boş Bırakılamaz"),
        passwordd: Yup.string().required("Boş Bırakılamaz"),
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
                <Headline content="Giris Yap " />

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
                                        value={formik.values.skill}
                                    />

                                    <Form.Input
                                        name="passwordd"
                                        label="Şifre"
                                        onChange={(event, data) => handleChange("password", data.value)}
                                        value={formik.values.skill}
                                    />
                                    {formik.errors.skill && formik.touched.skill && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.skill} /><br /></span>}
                                    <br />

                                    <Button circular fluid type="submit" color="yellow" content="Giris Yap" />
                                </Form>
                            </Formik>
                        </Grid.Column>
                        <Grid.Column width="3" />
                    </Grid.Row>
                </Grid>

                <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Added !" />
            </Container>
        </div>
    );
}
