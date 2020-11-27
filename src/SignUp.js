import React, { useState } from 'react';

function SignUp (){

    const initialState = {
        Firstname:"",
        Lastname:"",
        Email: "",
        Password: "",
        Confirmpassword:"",};

const [value,setValue] = useState(initialState);

const handleChange = (e) => {
    const {id,value} = e.target
    setValue((prevState) =>({...prevState,[id]:value,}));
};

const handleSubmit =(e) => {
    setValue(initialState)
    e.preventDefault();};


<input type= "text" value={value} onChange={handleChange}/>

    return(
        <form onSubmit={handleSubmit}>
            <h3>Create Account</h3>

            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="Firstname" className="Iname" value={value.Firstname} onChange={handleChange}/><br/>
            <label htmlFor="fname">Last name:</label><br/>
            <input type="text" id="Lastname" className="Iname" value={value.Lastname} onChange={handleChange}/><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="Email" className="email" value={value.Email} onChange={handleChange}/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="Password" className="password" value={value.Password} onChange={handleChange}/><br/>
            <label html="password">Confirm Password:</label><br/>
            <input type="password" id="Confirmpassword" className="cpassword" value={value.Confirmpassword} onChange={handleChange}/><br/>
            <button>Submit</button>

        </form>
        );
    }

    export default SignUp;
