import React from 'react'
import useForm from './UseForm'
import validate from './validateinfo';
import './Form.css'
import running from '../../images/running.jpg';

const LoginForm = () => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return (
        <div className="formContent" style={{ backgroundImage: `url(${running})`}}>
         
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Welcome Back!!
                </h1>
                <div className="formInputs">
                    <label htmlFor="username" className="formLabel">UserName</label>
                        <input 
                            type="text" 
                            name="username: " 
                            className="form-input" 
                            placeholder="Enter Username"
                            value={values.username}
                            onChange={handleChange}/>
                        {errors.username  && <p>{errors.username}</p>}      
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
                <button className="FormButton" type="submit">Log In</button>
            </form>
            </div>
    )
}

export default LoginForm
