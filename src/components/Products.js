import React, { useState, useEffect} from 'react'

import './pages.css'

 const Product = () =>{
const [products, setProducts] = useState([]);
// const products=props.data;
// const alt=`Photo of ${products.name} cozy game`;

  // let fetchUrl = 'https://cozy-cornergames.herokuapp.com/products'

useEffect(()=>{
  const showProducts = async () => {
    try {
      const res = await fetch('https://cozy-cornergames.herokuapp.com/products')
      const data = await res.json()
      setProducts(data);
    } catch (err) {
      console.log(err);
    }

  }; showProducts()
  console.log(products)
}, [products]);   

<div className='productsPage'> 
<div class="product1" id="gamedes"> 
{products.map((game) => {
return(



    <div className="productBox">
      <img src={game.Image} alt={game.name}/>
        <h3>{game.Title}</h3>
        <p>{game.Description}</p>
        <p>USD ${game.Price}</p>
        <button className='cartBtn'>Add to Cart</button>
    </div>


);
})}
</div>

</div>


}

export default Product;