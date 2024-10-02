import { Formik } from "formik";

export default function App() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field type="email" name="email" className="lorem"/>
          <button type="submit">Wyślij</button>
        </Form>
      </Formik>
    </div>
  )
 }
