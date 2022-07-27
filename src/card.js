

function card (props){

const products=props.data;
const alt=`Photo of ${products.name} cozy game`


    return   (

      <div className='productsPage'> 
<div class="product1" id="gamedes"> 

    <figure className="productBox">
        <p>{products.name}</p>
        <img src={products.img} alt={alt}/>
        <p>{products.description}</p>
        <p>USD ${products.price}</p>
    </figure>
</div>

</div>
  )
}