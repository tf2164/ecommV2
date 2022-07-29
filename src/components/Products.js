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

const filterItem = (categoryItem) => {
  const updatedItems = products.filter((i) => {
    return i.category === categoryItem;
  });

  setProducts(updatedItems);
};

return (
<div className='productsPage'> 
  <div className="filter_container">
    <h2 className="filter_title">Filter:</h2>

    <button className="filter_btn" onClick={() => filterItem("Low to High")}>
    Low to High
    </button>
  </div>



<div class="product1" id="gamedes"> 
{products.map((game) => {

return(
    <div className="productBox">
      <img className="image-pro" src={game.Image} alt={game.name}/>
        <h3>{game.Title}</h3>
        <p class="expandMoreContent" id="showMoreContent1">{game.Description}</p>
       <div className='expandMoreHolder'>
       <span expand-more data-hidetext="show less.." data-showtext="show more.." data-target="showMoreContent1" class="btn-expand-more">Show more</span>
       
        </div>
       
        <p>USD ${game.Price}</p>
        <button className='cartBtn'>Add to Cart</button>
    </div>)}
)};

</div>

</div>

 )}
document.addEventListener('DOMContentLoaded', ()=> {

const expandsMore = document.querySelectorAll('[expand-more')
function expand(){
  const showContent = document.getElementById(this.dataset.target)
  if(showContent.classList.contains('expand-active')){
this.innerHTML=this.dataset.showtext
  }
  else{
    this.innerHTML=this.dataset.hidetext
  }
showContent.classList.toggle('expand-active')
}
expandsMore.forEach(expandMore =>{
  expandMore.addEventListener('click',expand)
})

})



export default Product;
