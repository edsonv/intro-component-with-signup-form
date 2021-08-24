import { useState } from 'react'
import InputField from './InputField'
import { Validators } from '../utils/formValidations'

const Form = () => {
  const [values, setValues] = useState({})

  const handleChange = (name, value) => {
    // setValues({ ...values, [e.target.name]: e.target.value })
    setValues({ ...values, [name]: value })
    // console.log(name, value)
  }

  return (
    <form action="" className="form" onSubmit={ (event) => {
      event.preventDefault()
      // console.log(formEl)
    } } noValidate>
      <InputField
        type="text"
        id="FirstName"
        name="First Name"
        label="First Name"
        onChange={ handleChange }
        validators={ [
          { check: Validators.required, message: "First Name cannot be empty." }
        ] }
      />
      <InputField
        type="text"
        id="LastName"
        name="Last Name"
        label="Last Name"
        onChange={ handleChange }
        value={ values.LastName }
        validators={ [
          { check: Validators.required, message: "Last Name cannot be empty." }
        ] }
      />
      <InputField
        type="email"
        id="EmailAddress"
        name="Email Address"
        label="Email Address"
        onChange={ handleChange }
        value={ values.EmailAddress }
        validators={ [
          { check: Validators.required, message: "Email Address cannot be empty" },
          { check: Validators.email, message: "Looks like this is not an email." }
        ] }
      />
      <InputField
        type="password"
        id="Password"
        name="Password"
        label="Password"
        onChange={ handleChange }
        value={ values.Password }
        validators={ [
          { check: Validators.required, message: "Password cannot be empty." }
        ] }
      />
      <button type="submit" className="button -submit -bold -uppercase">Claim your free trial</button>
      <small className="small -semiBold">By clicking the button, you are agreeing to our <a href="" className="link -bold">Terms and Services</a></small>
    </form >
  )
}

export default Form