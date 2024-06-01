import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Select a Job Type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
              <option value="data-analytics">Data Analytics</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms & Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
