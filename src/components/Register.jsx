import { Link } from "react-router-dom"
import { useState } from "react";

export default function Register() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
    })

    function handleInput(event) {
        setUserDetails((prevState) =>{
            return {...prevState, [event.target.name]:event.target.value};
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(userDetails);
    }




    return (
        <section className="form-parent" onSubmit={handleSubmit}>
            
            <form className="form">
                <h1>Register</h1>
            
                <input className="register-input" type="text"  onChange={handleInput} placeholder="Enter Name" name="name" value={userDetails.name} required></input>
                <input className="register-input" type="email" onChange={handleInput} placeholder="Enter Email" name="email" value={userDetails.email} required></input>
                <input className="register-input" type="password" onChange={handleInput} placeholder="Enter Password" name="password" value={userDetails.password} required minLength={8}></input>
                <input className="register-input" type="number" onChange={handleInput} placeholder="Enter Age" name="age" value={userDetails.age} required max={100} min={1}></input>
                <button className="register-button">Join</button>
                <p>Already Registered? <Link to='/login'>Login to your Accout</Link></p>
            
            
            </form>

        </section>
    )
}