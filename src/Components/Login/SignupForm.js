
import React from 'react'
import useForm from './UseForm'
import validate from './validateinfo';
import './Form.css'
import running from '../../images/running.jpg';

const SignupForm = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className="formContent" className="formContent" style={{ backgroundImage: `url(${running})`}}>
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Hmmmm... seems you aren't logged in to view your profile. oh man, 
                    have you signed up yet?
                </h1>
                <div className="formInputs">
                    <label htmlFor="username" className="formLabel">UserName</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-input" 
                            placeholder="Enter Username" 
                            value={values.username}
                            onChange={handleChange}></input>
                        {errors.username  && <p>{errors.username}</p>} 
                </div>
                <div className="formInputs">
                    <label htmlFor="email" className="formLabel">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-input" 
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleChange}></input>
                            {errors.email  && <p>{errors.email}</p>} 
                </div>
                <div className="formInputs">
                    <label htmlFor="password" className="formLabel">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-input" 
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}></input>
                            {errors.password  && <p>{errors.password}</p>} 
                </div>
                <div className="formInputs">
                    <label htmlFor="password2" className="formLabel">Confirm Password</label>
                        <input 
                            type="password" 
                            name="password2" 
                            className="form-input" 
                            placeholder="Enter Password Again"
                            value={values.password2}
                            onChange={handleChange}></input>
                            {errors.password2  && <p>{errors.password2}</p>} 
                </div>
                <button className="FormButton" type="submit">Sign Up</button>
                <span className="form-login">
                    Already have an account? Login <a href="/">Here</a>
                </span>
                
            </form>
        </div>
    )
}

export default SignupForm;
