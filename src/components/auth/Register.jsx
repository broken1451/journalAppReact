import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { removeErr, setErr } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

const Register = () => {

  const dispatch = useDispatch()
  const {msgErr} = useSelector(state => state.ui)

  const [values, inputChange, reset] = useForm({
    name: 'adrian',
    email: 'adrian@gmail.com',
    password: '123456',
    password2: '123456',
  })

  const {name,email,password, password2} = values
  const register =(e)=>{
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name))
    }
  }

  const isFormValid = () =>{

    if (name.trim().length === 0) {
      console.log('Name is required');
      dispatch(setErr('Name is required'))
      return false
    } else if (!validator.isEmail(email)) {
      console.log('email is not valid');
      dispatch(setErr('email is not valid'))
      return false
    } else if (password !=password2 || password.length < 5 ) {
      dispatch(setErr('Password is not valid, should be at least 6charactersand match each other'))
      console.log('Password is not valid, should be at least 6charactersand match each other');
      return false
    }

    dispatch(removeErr())
    return true

  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={register}>
        {
          msgErr ?
          <div className='auth__alert-error'>
           {msgErr}
          </div>: null
        }

        <input className='auth__input' onChange={inputChange} value={name} type="text"  name="name" id="" autoComplete='off' placeholder="Name" />
        <input className='auth__input' onChange={inputChange} value={email} type="text" name="email" id="" autoComplete='off' placeholder="Email" />
        <input className='auth__input' onChange={inputChange} value={password} type="password" name="password" id="" placeholder="Password" />
        <input className='auth__input' onChange={inputChange} value={password2} type="password" name="password2" id="" placeholder="Confirm Password" />
        <button className='btn btn-primary btn-block mb-5' type="submit">Login</button>
        <Link className='link' to="/auth/ligin">Already Register</Link>
      </form>
    </>
  );
};

export default Register;
