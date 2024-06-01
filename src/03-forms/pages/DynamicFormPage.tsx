import { Formik, Form } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }

    // Otras reglas

    if (rule.type === "email") {
      schema = schema.email(rule.message);
    }

    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value || 1, rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

console.log(initialValues);

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ as, type, name, label, placeholder, options }) =>
              as === "input" ? (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              ) : (
                <MySelect label={label} name={name} key={name}>
                  <option value="">-- Select an option --</option>
                  {options?.map(({ label, id }) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </MySelect>
              )
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
