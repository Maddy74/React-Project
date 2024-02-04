import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import {ShopContext} from '../Context/ShopContext'
import drop_down from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
   return(
    <div className='shop-category'>
    <img src={props.banner} alt='' className='img1' />
    <div className='shopCategory-indexsort'>
    <p>
      <span>Showing 1-12</span> Out of 36 products
    </p>
    <div className='shopCategory-sort'>
    Sort by <img src={drop_down} alt='' />
    </div>
    </div>
    <div className='shopCategory-products'>
    {all_product.map((item,i)=>{
      if (props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
      }
      else {
        return null;
      }
    })}
    </div>
    <div className='shopCategory-loadmore'>
      Explore More
    </div>
    </div>
   )
}

export default ShopCategory
