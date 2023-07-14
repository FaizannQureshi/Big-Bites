import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Login() {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))

        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })

        });

        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        }

        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            const userEmail = localStorage.getItem("userEmail");
            console.log("userEmail:", userEmail);

            navigate("/");
        }

        else {
            alert("Enter Valid Credentials")
        }

    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Navbar />
        <div className="d-flex justify-content-center" style={{paddingTop: 100}}>
        
        <form onSubmit={handleSubmit}>
            <div className=" containers form-outline mb-4">
                                        <label className="form-label" for="form2Example1">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
            </div>

            {/* <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                </div>

            </div> */}
            <div className='text-center'>

            <button type="submit" to="/App" className="btn btn-primary btn-block mb-4 ml-auto">Sign in</button>
            </div>

            <div className="text-center">
                <p>Not a member? <Link to="/createuser" >Register</Link></p>
                
            </div>
            
        </form>
        <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <Footer />
                </div>
        </div>
        </>
    )
}
