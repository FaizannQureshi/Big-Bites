import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from '../trash.svg';
import './Cart.css';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className='w-100 d-flex align-items-center justify-content-center cart-empty'>
        <div className='m-2 text-center text-white fs-1 cart-empty-message'>
          The Cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem('userEmail');
    let response = await fetch('http://localhost:5000/api/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log('Order Response:', response);
    if (response.status === 200) {
      dispatch({ type: 'DROP' });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className='text-white cart-container'>
      <div className='container m-auto mt-5 table-responsive'>
        <table className='table'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col' className='text-center'>
                #
              </th>
              <th scope='col' className='text-center'>
                Name
              </th>
              <th scope='col' className='text-center'>
                Quantity
              </th>
              <th scope='col' className='text-center'>
                Option
              </th>
              <th scope='col' className='text-center'>
                Amount
              </th>
              <th scope='col' className='text-center'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr className='text-white' key={index}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-center'>{food.name}</td>
                <td className='text-center'>{food.qty}</td>
                <td className='text-center'>{food.size}</td>
                <td className='text-center'>{food.price}</td>
                <td>
                  <button
                    type='button'
                    className='btn p-0'
                    onClick={() => {
                      dispatch({ type: 'REMOVE', index: index });
                    }}
                  >
                    <img src={trash} alt='delete' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='total-price'>
          <h1 className='fs-2 text-white'>
            <strong>Total Price : Rs.</strong>{' '}
            <strong className='text-success'>{totalPrice}</strong>/-
          </h1>
        </div>
        <div className='checkout-btn'>
          <button className='btn bg-success' onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
