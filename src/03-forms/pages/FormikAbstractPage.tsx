import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MyCheckbox, MySelect } from "../components";
import "../styles/styles.css";

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Must accept terms and conditions"
          ),
          jobType: Yup.string()
            .notOneOf(["", "it-junior"], "Invalid Job Type")
            .required("Select a Job Type"),
        })}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              name="firstName"
              label="First Name"
              placeholder="First Name"
            />

            <MyTextInput
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
            />

            <MyTextInput
              name="email"
              label="Email Address"
              placeholder="Email Address"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
              <option value="data-analytics">Data Analytics</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms & Conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
