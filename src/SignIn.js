import React, {useState} from 'react';


function SignIn () {
    const initialState ={
        Email: "" , Password: "" ,};

    const [value, setValue] = useState(initialState);
    const handleChange = (e) => {
        const {id,value} = e.target
        setValue((prevState) =>({...prevState,[id]:value,}));
    };
    
    const handleSubmit =(e) => {
        setValue(initialState)
        e.preventDefault();};

    return (
        <form onSubmit={handleSubmit}>
            <h3>SignIn</h3>

            <label htmlFor ="email">Email:</label><br/>
            <input type="email" id="Email" className="email" value={value.Email} onChange={handleChange}required/><br/>
           
            <label htmlFor ="password">Password:</label><br/>
            <input type="password" id="Password" className="password" value={value.Password} onChange={handleChange}required/><br/>
            
            <button>Submit</button>

        </form>
    );
}

export default SignIn;