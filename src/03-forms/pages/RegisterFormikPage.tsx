import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <MyTextInput name="name" label="Name" placeholder="John" />

            <MyTextInput
              name="email"
              label="Email"
              placeholder="johndoe@gmail.com"
            />

            <MyTextInput
              name="password1"
              label="Password"
              type="password"
              placeholder="********"
            />

            <MyTextInput
              name="password2"
              label="Confirm password"
              type="password"
              placeholder="********"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
