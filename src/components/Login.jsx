import { Link } from "react-router-dom"

export default function Login() {
    return (
        <section className="form-parent">
            
            <form className="form">
                <h1>Login</h1>
            
                <input className="register-input" type="email" placeholder="Enter Email" name="email"></input>
                <input className="register-input" type="password" placeholder="Enter Password" name="password"></input>
                <button className="register-button">Login</button>
                <p>Don't have an Account? <Link to="/register">Create an Account</Link></p>
            
            
            </form>

        </section>
    )
}