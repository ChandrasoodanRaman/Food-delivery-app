import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, gettotalcart } = useContext(StoreContext)
  const navigate = useNavigate()  // Correctly calling useNavigate to get the navigate function

  return (
    <>
      <div className='cart'>
        <div className='cart-items'>
          <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br></br>
          <hr></hr>
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>  {/* Add a key to avoid React warning */}
                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt={item.name}></img>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr></hr>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className='cart-bottom'>
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
              <p>${gettotalcart()===0?0:2}</p>
            </div>
            <hr></hr>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${gettotalcart()===0?0:gettotalcart() + 2}</b>
            </div>
            {/* Corrected onClick to use the navigate function */}
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
            <div className='cart-promocode'>
              <div>
                <p>If you have a promo code, enter it here</p>
                <div className='cart-promocode-input'>
                  <input type='text' placeholder='promo code'></input>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default Cart
