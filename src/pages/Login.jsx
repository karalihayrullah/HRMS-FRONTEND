import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "../layouts/DateLabel";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../redux/actions/authActions";
import UserService from "../services/userService";
import alertify from "alertifyjs"

export default function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    let userService = new UserService()

    const handleLogin = (user) => {
        dispatch(userLogin(user))
    }

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email Kurallarına Uymuyor").required("Boş Bırakılamaz"),
        password: Yup.string().required("Boş Bırakılamaz"),
    });



    const onSubmit = (values, { resetForm }) => {
        console.log(values);

        setTimeout(() => {
            resetForm();
        }, 100);

        userService.login(values).then(result => {
            handleLogin(result.data.data)
            history.push("/")
        }).catch((result) => {
            alertify.error(result.response.data.message)
        })

    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });



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

            </Container>
        </div>
    );
}