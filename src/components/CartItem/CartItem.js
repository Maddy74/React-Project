import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
const CartItem = () => {
      const {getTotalcartamount,all_product, cartItems, removefromcart} = useContext(ShopContext);
    console.log("cartItems", cartItems);
  return (
    <div className='cartitems'>
      <div className='item-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.filter((e) => cartItems[e.id] > 0).map((e) => ( 
         <div key={e.id}>
        <div className='item-format item-format-main'>
            <img src={e.image} alt='' className='icon-product-icon' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='items-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img className='items-remove-icon' src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt='' />
        </div>
        <hr />
      </div> 
      ))}
      <div className='items-down'>
      <div className='item-total'>
      <h1>Cart Totals</h1>
      <div>
        <div className='item-total-item'>
        <p>Subtotal</p>
        <p>${getTotalcartamount()}</p>
        </div>
        <hr/>
        <div className='item-total-item'>
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr/>
        <div className='item-total-item'> 
        <h3>Total</h3>
        <h3>${getTotalcartamount()}</h3>
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='item-promocode'> 
      <p>If you have a promo code, Enter it here </p>
      <div className='item-promobox'>
      <input type='text' placeholder='promo code' />
      <button>Submit</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
