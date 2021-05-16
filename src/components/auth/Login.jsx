import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login, startGooleLogin, startLoginWithEmailPassword } from "../../actions/auth";

const Login = () => {

  const dispatch = useDispatch()
  const {loading, msgErr} = useSelector(state => state.ui)

  const [values, inputChange, reset] = useForm({
    email: 'adrian@gmail.com',
    password: '123456'
  })

  const {email,password} = values
  const handlelogin  = (e)=>{
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email,password))
    console.log({email,password});
  }

  const loginGoogle = ()=>{
    dispatch(startGooleLogin())
  }


  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handlelogin}>
        <input onChange={inputChange} value={email} className='auth__input' type="text" name="email" id="" autoComplete='off' placeholder="Email" />
        <input onChange={inputChange} value={password} className='auth__input' type="password" name="password" id="" placeholder="Password" />
        <button disabled={loading} className='btn btn-primary btn-block' type="submit">Login</button>
        <div className='auth__social-network'>
          <p>Login with social networks</p>
          <div onClick={loginGoogle} className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className='link' to="/auth/register">Create Accouunt</Link>
      </form>
    </>
  );
};

export default Login;
