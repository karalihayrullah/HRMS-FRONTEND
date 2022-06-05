import React from "react";  
import { Formik, Form, ErrorMessage } from "formik";
import ImageService from "../services/imageService";
import Headline from "../layouts/Headline";
import { useParams } from "react-router";

export default function ImageUpdate() {
    let {id}= useParams()


    let imageService = new ImageService()
    
    return (
        <div>
            <Headline content="Kayit Ol" />
    <Formik
      initialValues={{
        photo:null
      }}
      onSubmit={(values) => {
        let data = new FormData();
        data.append("photo", values.photo);
          
        imageService.upload(id,data.get("photo"))
      }}
    >
      {(formik) => {
        return (
          <>
          
            <Form>
              <input
                id="file"
                name="photo"
                type="file"
                onChange={(event) => {
                  console.log(event.target.files[0])
                  formik.setFieldValue("photo", event.target.files[0]);
                }}
                
              />
              <ErrorMessage name="photo"/>
              <button type="submit" disabled={formik.isSubmitting}>
                Submit
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
    </div>
    );

}