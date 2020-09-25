import React from 'react';
import './App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import FormikField from './components/FormField/FormField';

interface FormValues{
  name: string;
}

const initialValues: FormValues={
  name: ""
}

const RegisterSchema=Yup.object().shape({
  name: Yup.string()
  .min(2, 'Name must have atlear 2 characters')
  .required('Name is required')
})

function App() {

  const forSubmit=(values:FormValues): void =>{
    alert(JSON.stringify(values));
  }

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={RegisterSchema}
      >
        {
          ({dirty,isValid})=>{
            return (
              <Form>
                <FormikField label="Name" name="name"/>
                <button disabled={!dirty || !isValid} type="submit">Sign up</button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  );
}

export default App;
