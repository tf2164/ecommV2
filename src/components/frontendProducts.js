
import './pages.css'
import React from "react";
import adventureTime from './visuals/adventureTime.jpeg';
import animalCross from './visuals/animalCross.png';
import blackbook from './visuals/blackbook.png';
import laterAlli from './visuals/laterAlli.png';
import nintenSports from './visuals/nintenSports.jpeg';
import rajii from './visuals/rajii.png';
import whatcomes from './visuals/whatcomes.png';
import storyofseasons from './visuals/storyofseasons.jpeg';
import stardewVal from './visuals/stardewVal.jpeg';
import animalHome from './visuals/animalHome.png';
import two from './visuals/two.jpeg';




export default function Store(){

    return (

<div className='page-wrapper'>

    
<div className='cell'>
  <img className='gameimg' src={adventureTime}/>
  <p className='product' id="gamedes"> Adventure Time: Pirates of the Enchiridion </p>
  <p>Join our heroes, Finn and Jake in the Land of Ooo as they explore the high seas, search for hidden clues, interrogate shady suspects and fight pirates to solve the mystery</p>
  <div className='cartProduct'>
    <p className='price'> 59.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
  </div>
</div>




  <div className='cell'>
  <img className='gameimg' src={animalCross}/>
    <p className='product' id="gamedes"> Animal Crossing™: New Horizons </p>
    <p>  Create your personal getaway and customize your character, home, decorations, and even the landscape itself. you’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and Isabelle will lend their services and happily help you grow your budding community. </p>
    <div className='cartProduct'> <p className='price'> 59.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>

  <div className='cell'>
  <img className='gameimg' src={animalHome}/>
    <p className='product' id="gamedes"> Animal Crossing™: New Horizons - Happy Home Paradise</p>
    <p>   Travel to a distant group of beautiful resort islands with a diverse set of landscapes. This time, you are in charge of inviting characters as clients and helping them live out their own dream vacations </p>
    <div className='cartProduct'> <p className='price'> 24.99</p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>

  <div className='cell'>
  <img className='gameimg' src={blackbook}/>
    <p className='product' id="gamedes"> Black Book </p>
    <p>  A haunting tale of a young sorceress, who gave her life to serve the dark forces. Dive into the cold, yet alluring world of Slavic folktales - and uncover the secrets that hide in the darkness. </p>
    <div className='cartProduct'> <p className='price'> 17.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={two}/>
    <p className='product' id="gamedes"> It Takes Two</p>
    <p>  Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass* and work together across a huge variety of gleefully disruptive gameplay challenges. </p>
    <div className='cartProduct'> <p className='price'> 29.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>

  <div className='cell'>
  <img className='gameimg' src={laterAlli}/>
    <p className='product' id="gamedes"> Later Alligator </p>
    <p>   help Pat the Alligator uncover the secret behind the mysterious “event” his family’s planning for him in the heart of Alligator New York City. Meet over 100 animated alligators and solve their problems. Beat them in 31 joke-filled minigames and challenges </p>
    <div className='cartProduct'> <p className='price'> 17.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={stardewVal}/>
    <p className='product' id="gamedes"> Stardew Valley </p>
    <p>  You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? </p>
    <div className='cartProduct'> <p className='price'> 14.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={nintenSports}/>
    <p className='product' id="gamedes"> 
Nintendo Switch™ Sports </p>
    <p>  Get moving with Soccer, Volleyball, Bowling, Tennis, Badminton, and Chambara (Swordplay) using Joy-Con™ controllers!
  </p>
  <div className='cartProduct'> <p className='price'> 39.99 </p>
  <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={rajii}/>
    <p className='product' id="gamedes"> Raji: An Ancient Epic </p>
    <p> For the very first time, experience a game set in ancient India and infused with Hindu and Balinese mythology. You will find yourself immersed in ancient India where every corner is begging to be explored. From enchanting stories from the lore of the game to tightly packed battles.
  </p>
  <div className='cartProduct'> <p className='price'> 24.99 </p>
  <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>

  <div className='cell'>
  <img className='gameimg' src={animalCross}/>
    <p className='product' id="gamedes"> Kirby™ and the Forgotten Land</p>
    <p> Float off on an all-new adventure as the powerful puffball, Kirby. Explore in 3D stages as you discover a mysterious world with abandoned structures from a past civilization</p>
    <div className='cartProduct'> <p className='price'> 59.99 </p>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={storyofseasons}/>
    <p className='product' id="gamedes"> STORY OF SEASONS: Friends of Mineral Town</p>
    <p> Plant crops, raise animals, build relationships, and get to know the residents of your new home in this brand-new entry in the STORY OF SEASONS series!
    </p>
    <div className='cartProduct'> <p className='price'> 29.99</p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>


  <div className='cell'>
  <img className='gameimg' src={whatcomes}/>
    <p className='product' id="gamedes"> What Comes After </p>
    <p>  Ride the train filled with the souls of the people, animals, and plants that are on their way to leave this world, and talk to them to learn about love, regrets, life, and death that haunt us every day until our time has come
    </p>
    <div className='cartProduct'> <p className='price'> 6.99 </p>
    <button class="add-to-cart-button" data-product-id="123">Add to Cart</button>
    </div>
  </div>

</div>

)
}
