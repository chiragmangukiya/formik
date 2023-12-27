import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import * as Yup from 'yup';

const initialvalues={
  name: "", 
  email: "", 
  password:"", 
  cpassword:""
}

const validateSchema=Yup.object({
  name: Yup.string().min(2).max(25).required("Enter your name"),
  email: Yup.string().email().required("Enter email address"),
  password: Yup.string().min(6).required("Enter your password"),
  cpassword: Yup.string().required().
             oneOf([Yup.ref("password"), null], "Password must match"),
})

function App() {

  const {values, handleChange, handleBlur, handleSubmit, touched, errors} = useFormik({
    initialValues: initialvalues,
    validationSchema:validateSchema,
    onSubmit:(values)=>{
         console.log(values);
    }
  })

  return (
    <>
      <div className="container">
          <form onSubmit={handleSubmit} className="row g-3">
               <div className="col-md-12">
                    <label htmlFor="inputEmail1" className="form-label">Your Name</label>
                    <input type="text" 
                           className="form-control" 
                           id="inputEmail1" 
                           name="name" 
                           value={values.name} 
                           onChange={handleChange} 
                           onBlur={handleBlur} />

                    {errors.name && touched.name ? (<span className="error text-danger">{errors.name}</span>) : null}
               </div>
               <div className="col-md-12">
                    <label htmlFor="inputEmail3" className="form-label">Email</label>
                    <input type="text" 
                           className="form-control" 
                           id="inputEmail3" 
                           name="email" 
                           value={values.email} 
                           onChange={handleChange} 
                           onBlur={handleBlur} />

                    {errors.email && touched.email ? (<span className="error text-danger">{errors.email}</span>) : null}
               </div>
               <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" 
                           className="form-control" 
                           id="inputPassword4" 
                           name="password" 
                           value={values.password} 
                           onChange={handleChange} 
                           onBlur={handleBlur} />

                    {errors.password && touched.password ? (<span className="error text-danger">{errors.password}</span>) : null}
               </div>
               <div className="col-md-6">
                    <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
                    <input type="password" 
                           className="form-control" 
                           id="inputPassword5" 
                           name="cpassword" 
                           value={values.cpassword} 
                           onChange={handleChange} 
                           onBlur={handleBlur} />

                    {errors.cpassword && touched.cpassword ? (<span className="error text-danger">{errors.cpassword}</span>) : null}
               </div>               
               <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
               </div>
          </form>
     </div>

   </>
  );
}

export default App;
