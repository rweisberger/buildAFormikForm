import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values =>{
      alert('Login successful')
      console.log('form:', values)

    },
    validate: values => {
    let errors = {};
    if(!values.email) errors.email = "Field required";
    // the code below is from: https://codesandbox.io/s/ww50x098m7?file=/index.js:1643-1696
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    // the code below is from: http://emailregex.com/
    // else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
    //   errors.email = 'Invalid email address';
    }
    if(!values.password) errors.password = "Field required";

      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
          <label htmlFor="emailField">Email: </label>
          <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
          <label htmlFor="pswField">Password: </label>
          <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
          <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
