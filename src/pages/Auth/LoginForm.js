import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../../components";

const LoginForm = () => {
  let initialValues = {
    email: "",
    password: ""
  };

  let validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
  });

  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form id="login-from">
          <div className="space-y-8 w-full">
            <FormikControl
              placeholder="Email"
              control="input"
              type="text"
              name="email"
            />
            <FormikControl
              placeholder="Password"
              control="input"
              type="password"
              name="password"
            />

            <button className="bg-secondary text-white px-4 py-1 rounded-md" type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
