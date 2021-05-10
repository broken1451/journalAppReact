import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form>
        <input className='auth__input' type="text" name="name" id="" autoComplete='off' placeholder="Name" />
        <input className='auth__input' type="text" name="email" id="" autoComplete='off' placeholder="Email" />
        <input className='auth__input' type="password" name="password" id="" placeholder="Password" />
        <input className='auth__input' type="password" name="password2" id="" placeholder="Confirm Password" />
        <button className='btn btn-primary btn-block mb-5' type="submit">Login</button>
        <Link className='link' to="/auth/ligin">Already Register</Link>
      </form>
    </>
  );
};

export default Register;
