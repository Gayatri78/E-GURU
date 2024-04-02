// Courses: Main component that manages the state of the application including showing either the list of courses or the cart.


import React, { useState } from 'react';
import Navbar from '../MainLogicCart/Navbar';
import CourseCard from '../MainLogicCart/CourseCard';
import Cart from '../MainLogicCart/Cart';
import '../StyleCart/CourseCard.css';


function Courses() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => item.id === product.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + d } : cartItem
    );

    setCart(updatedCart);
  };

  return (

    <div>

      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />

        <div className="BackgroundImgDiv">
        <div className="aboutBackgroundImg">
          <h2>Comprehensive skill development, all in one destination!</h2>
          <p></p>
          
        </div>
      </div>


        {show ? <CourseCard handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
        {warning && <div className='warning'>Item is already added to your cart</div>}
      </React.Fragment>
    </div>
  );
}

export default Courses;
