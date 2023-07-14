import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart';
import Modal from '../Modal';
import { useCart } from './ContextReducer';
import './Navbar.css';


export default function Navbar() {
    let data = useCart();

    const [cartView, setCartView] = useState(false);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");

    }
    return (
        <div className='cart-link'>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
                <div className="container-fluid" style={{paddingLeft:'30px'}}>
                    <Link class="navbar-brand" to="/" style={{fontSize:"3rem"}}>
                        <span>B</span>ig <span>B</span>ites
                    </Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link fs-5  text-white me-4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5  text-white me-4" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5  text-white me-4" aria-current="page" to="/contact">Contact</Link>
                            </li>

                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5  text-white me-4" aria-current="page" to="/MyOrder">My Orders</Link>
                                </li>
                                : ""}

                            <li>

                            </li>
                            <li>
                                
                            </li>


                        {(!localStorage.getItem("authToken")) ?

                            <div className='d-flex nav-item mb-2 navbar-nav'>
                                <Link className="nav-link fs-5  text-white me-4 " aria-current="page" to="/login">Login</Link>
                                <Link className="nav-link fs-5  text-white me-4" aria-current="page" to="/createuser">SignUp</Link>

                            </div>
                            :
                            <div className='d-flex nav-item mb-2 navbar-nav'>
                                <Link className='nav-link fs-5  text-white me-4 ' aria-current="page" onClick={() => { setCartView(true) }}>
                                    My Cart {"  "}
                                    <Badge pill bg="success"> {data.length} </Badge>
                                </Link>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}

                                <Link className='nav-link fs-5  text-white me-4' onClick={handleLogout}>
                                    Logout
                                </Link>
                            </div>
                        }
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}
