import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })

        });

        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        navigate("/");



    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Navbar />

            <div className='d-flex containers justify-content-center' style={{ paddingTop: 110 }}>


                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                    </div>
                    <div className='text-center'>

                    {/* <button type="submit" className="m-3 btn btn-primary">Rer</button> */}
                        <button className="btn btn-primary btn-block mb-4 ml-auto " type="submit" to="/login">Register</button>
                    </div>
                    <div className="text-center">
                        <p>Already a member? <Link to="/App" >Log in</Link></p>

                    </div>

                    {/* <Link to="/login" className='m-3 btn btn-danger'></Link> */}
                </form>
            </div>
            <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
                <Footer />
            </div>

        </>
    )
}
