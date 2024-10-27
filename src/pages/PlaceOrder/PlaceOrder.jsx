import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {gettotalcart}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>
      <div className='place-order-right'>
            <div className='cart-total'>
                <h2>Cart totals</h2>
                <div>
                          <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${gettotalcart()}</p>
                          </div>
                          <hr></hr>
                          <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>$2</p>
                          </div>
                          <hr></hr>
                          <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${gettotalcart() + 2}</b>
                          </div>
                  {/* Corrected onClick to use the navigate function */}
                  <button >PROCEED TO PAYMENT</button>
                </div>
              </div>
        </div>
    </form>
  )
}

export default PlaceOrder