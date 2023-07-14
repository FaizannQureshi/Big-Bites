import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            if (!res.ok) {
                throw new Error('Failed to fetch order data');
            }

            const response = await res.json();
            console.log('orderData:', response.orderData);
            setOrderData(response.orderData);

        } catch (err) {
            console.log('Error fetching order data:', err.message);

        }
    };


    useEffect(() => {
        fetchMyOrder();
    }, []);

    console.log('orderData:', orderData);

    return (
        <div>
            <Navbar />
            <div className='container-fluid' style={{ paddingTop: '97px', backgroundColor: 'black' }}>
                <div className='row'>
                    <div className='col'>
                        {Array.isArray(orderData) && orderData.length > 0 ? (
                            orderData.map((order) => (
                                <div key={order.order_date} className='card mt-4' style={{ backgroundColor: '#28282B', color: 'white' }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{order.order_date}</h5>
                                        <hr />
                                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                                            {order.order_items.map((item) => (
                                                <div className='col' key={item.id}>
                                                    <div className='card mb-4' style={{ backgroundColor: 'black' }}>
                                                        <div className='card-body'>
                                                            <h6 className='card-title'>{item.name}</h6>
                                                            <div className='container'>
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        <span className='d-block'>{item.qty}</span>
                                                                        <span className='d-block'>{item.size}</span>
                                                                        <span className='d-block'>Order Date: {order.order_date}</span>
                                                                    </div>
                                                                    <div className='col text-end'>
                                                                        <span className='d-block'>Rs {item.price}/-</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='text-center mt-4'>No previous orders</div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );


}
