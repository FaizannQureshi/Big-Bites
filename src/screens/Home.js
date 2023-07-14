import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import './Home.css';


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ backgroundColor: "#28282B", color: 'white' }}>
            {/* Navbar component */}
            <div><Navbar /></div>

            <div className='containers'>
                <div style={{ paddingTop: "10px" }}>
                    {/* Carousel */}
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ maxHeight: "530px" }}>
                        <div className="carousel-inner" id="carousel">
                            <div className='carousel-caption'>
                                {/* Search input */}
                                <div className="d-flex justify-content-center">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                    <button className="btn btn-outline-success text-black bg-success" type="submit">Search</button>
                                </div>
                            </div>
                            <div id='image' className="carousel-item active">
                                <img src={home1} className="d-block w-100" style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }} alt="..." />
                            </div>
                            <div id='image' className="carousel-item">
                                <img src={home2} className="d-block w-100" style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }} alt="..." />
                            </div>
                            <div id='image' className="carousel-item">
                                <img src={home3} className="d-block w-100" style={{ filter: "brightness(90%)", objectFit: "cover", maxHeight: "530px" }} alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='container'>
                {foodCat.length > 0 &&
                    foodCat.map((data) => {
                        return (
                            <div className='row mb-3' key={data._id}>
                                <div className="fs-3 m-3">{data.CategoryName}</div>
                                <hr />
                                <div className="d-flex flex-wrap">
                                    {foodItem.length > 0 ? (
                                        foodItem
                                            .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                            .map((filterItems) => {
                                                return (
                                                    <div key={filterItems._id} className='card-column mb-3'>
                                                        <Card foodItem={filterItems} options={filterItems.options[0]} />
                                                    </div>
                                                );
                                            })
                                    ) : (
                                        <div key={data.CategoryName}>No such data found</div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </div>


            <div><Footer /></div>
        </div>
    )
}
