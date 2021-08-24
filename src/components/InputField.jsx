import { useState } from 'react'
import PropTypes from 'prop-types'
import { validateInput } from '../utils/formValidations'

const InputField = ({ type, name, id, label, onChange, validators }) => {
  const [error, setError] = useState(false)
  const [value, setValue] = useState()

  const handleChange = (event) => {
    const { name, value, id } = event.target
    setValue(value)
    setError(validateInput(validators, value, id))
    onChange(name, value)
    // console.log(id)
  }

  return (
    <div className="form-group">
      <input type={ type } name={ name } id={ id } className="input" onChange={ event => handleChange(event) } value={ value } required />
      <label htmlFor={ name } className="label">{ label }</label>
      { error && <i className="icon-error"></i> }
      { error && <span className="errorMessage">{ error.message }</span> }
    </div>
  )
}

InputField.propTypes = {
  // value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  // value: '',
  name: '',
  label: '',
  type: 'text',
  validators: []
};

export default InputField