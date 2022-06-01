import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
import { toast } from "react-toastify";
export default function CandidateSıgnIn() {

    
    let candidateService = new CandidateService()

    const [open, setOpen] = useState(false);


    const initialValues = {
        email: "",
        password:"",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Boş Bırakılamaz"),
        password: Yup.string().required("Boş Bırakılamaz"),
    });

    function handleCandidateValues(values){
        return {
            email: values.email,
            password : values.password,
        }
    }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);

        candidateService.login(handleCandidateValues(values)).then(result=>{
            if (result.data.success) {
                toast.success(result.data.message)
            } else {
                toast.error(result.data.message)
            }
        })
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
                                        name="email"
                                        label="Email"
                                        onChange={(event, data) => handleChange("email", data.value)}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && formik.touched.email && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.email} /><br /></span>}

                                    <Form.Input
                                        name="password"
                                        label="Şifre"
                                        onChange={(event, data) => handleChange("password", data.value)}
                                        value={formik.values.password}
                                    />
                                    {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /></span>}
                                    <br />

                                    <Button circular fluid type="submit" color="yellow" content="Giris Yap" />
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