import React, { useEffect, useState, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();

    const priceRef = useRef();

    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })

    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])


    return (
        <div style={{ color: "white", backgroundColor: "#28282B" }}>
            <div style={{ color: "white", backgroundColor: "#28282B" }}>
                <div className="card-deck mt-3">
                    <div className="col-12 col-md-6 col-lg-3 mt-3" key={data._id}>
                        <div className="card" style={{ width: "17rem", maxHeight: "450px", color: "white", backgroundColor: "black" }}>
                            <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                            <div className="card-body">
                                <h5 className="card-title">{props.foodItem.name}</h5>
                                <p className="card-text">Bon Appétit</p>
                                <div className="container w-100">
                                    <select className='m-0 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                        {Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}>
                                                    {i + 1}


                                                </option>
                                            )
                                        })}
                                    </select>

                                    <select className='m-1 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                        {priceOptions.map((data) => {
                                            return <option key={data} value={data}> {data} </option>
                                        })}

                                    </select>

                                    <div className=' h-100 fs-6 d-inline' style={{ fontSize: 6 }}>
                                        Rs{finalPrice}/-
                                    </div>
                                </div>
                                <hr />
                                <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
