// import React from 'react'
// import './pages.css'

// export default function Product(props){
// // //  const [searchTerm, setSearchTerm] = useState("");
// // const [products, setProducts] = useState([])

//   let fetchUrl = 'url/products'

//   const showProducts = async (url) => {
//     try {
//       const res = await fetch(url)
//       const data = await res.json()
//       setProducts(data)
//     } catch (err) {
//       console.log(err)
//     }

//   }

//   useEffect(() => {
//     const showProducts = async () => {
//       try {
//         const res = await fetch(fetchUrl)
//         const data = await res.json()
//         setProducts(data)
//       } catch (err) {
//         console.log(err)
//       }

//     }
//     showProducts();
//   }, [])

// }




{/* 
    <div className='gamesCozy'>
    <div class="product1 productBox" id="gamedes"> 
         <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/adventureTime.jpeg" alt="errorloading"/>
      <h3>Adventure Time</h3>
      <p> Join our heroes, Finn and Jake in the Land of Ooo as they explore the high seas, search for hidden clues, 
         interrogate shady suspects and fight pirates to solve the mystery
         (24.99)
         </p>
    </div>
    
    
         
    <div class="product2 productBox" id="gamedes"> 
         <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/animalCross.png" alt="errorloading"/>
      <h3>Animal Crossing:New Horizons</h3>
      <p> Create your personal getaway and customize your character, home, decorations, and even the landscape itself. 
         You’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and 
        Isabelle will lend their services and happily help you grow your budding community. 
        (59.99)
        </p>
    </div>
    
    
         
    <div class="product3 productBox"id="gamedes"> 
         <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/animalHome.png" alt="errorloading"/>
      <h3>Animal Crossing: Happy Home Paradise</h3>
      <p> Travel to a distant group of beautiful resort islands with a diverse set of landscapes. This time, you are 
         in charge of inviting characters as clients and helping them live out their own dream vacations 
         (24.99)
         </p>
    </div>
    
    
         
    <div class="product4 productBox"id="gamedes"> 
         <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/blackbook.png" alt="errorloading"/>
      <h3>Black Book</h3>
      <p>A haunting tale of a young sorceress, who gave her life to serve the dark forces. Dive into the cold, yet 
        alluring world of Slavic folktales - and uncover the secrets that hide in the darkness. 
        (17.99)
        </p>
    </div>
    
    
         
    <div class="product5 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/cozy-grove.jpg" alt="errorloading"/>
      <h3> Cozy Grove </h3>
         <p> A life-sim game about camping on a haunted, ever-changing island. As a Spirit Scout, you'll wander the 
         island's forest each day, finding new hidden secrets and helping soothe the local ghosts. 
         (14.99)
         </p>
    </div>
    
    
         
    <div class="product6 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/laterAlli.png" alt="errorloading"/>
      <h3>Later Alligator</h3>
          <p> Help Pat the Alligator uncover the secret behind the mysterious “event” his family’s planning for him in 
          the heart of Alligator New York City. Meet over 100 animated alligators and solve their problems. Beat them in 
          31 joke-filled minigames and challenges 
          (17.99)
          </p>
    </div>
    
    
    
         
    <div class="product7 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/lifeis.png" alt="errorloading"/>
      <h3>Life Is Strange: True Colors</h3>
           <p>A narrative adventure, featuring a young woman with an astonishing supernatural power, through which she 
           can experience the strong emotions of others. As she probes the mysteries of Haven Springs, revealing its 
           secrets, Alex will discover moments of quiet transcendence.
           (59.99)
           </p>
    </div>
    
    
    
         
    <div class="product8 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/nintenSports.jpeg" alt="errorloading"/>
      <h3>Nintendo Switch Sports </h3>
          <p>Get moving with Soccer, Volleyball, Bowling, Tennis, Badminton, and Chambara (Swordplay) using Joy- 
          Con™ controllers!
          (39.99)
          </p>
    </div>
    
         
         
    <div class="product9 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/rajii.png" alt="errorloading"/>
      <h3>Raji</h3>
          <p>For the very first time, experience a game set in ancient India  and infused with Hindu and Balinese           mythology. You will find yourself immersed in ancient India where every corner is begging to be explored. From        enchanting stories from the lore of the game to tightly packed battles.
           (24.99)
          </p>
    </div>
    
    
         
    <div class="product10 productBox"id="gamedes"> 
          <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/stardewVal.jpeg" alt="errorloading"/>
      <h3>Stardew Valley</h3>
        <p>  A farming simulation game primarily inspired by the Harvest Moon video game series.
          (14.99)
          </p>
    </div>
    
    
         
    <div class="product11 productBox"id="gamedes">
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/story-of-seasons.jpeg" alt="errorloading"/>
      <h3>Story of Seasons</h3>
          <p>Plant crops, raise animals, build relationships, and get to know the residents of your new home in this             brand-new entry in the STORY OF SEASONS series!
          (29.99)</p>
    </div>
    
    
         
    <div class="product12 productBox"id="gamedes"> 
      <img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/whatcomes.png" alt="errorloading"/>
      <h3>What comes after</h3>
          <p>Ride the train filled with the souls of the people, animals, and plants that are on their way to leave this        world, and talk to them to learn about love, regrets, life, and death that haunt us every day until our time          has come</p>
          (6.99)
    </div>
    </div>
    
    </div>)
    } */}
    



{/* //     <div className="templateContainer">
//       <div className="searchInput_Container">
//         <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => { */}
{/* //           setSearchTerm(event.target.value);
//         }} />
//       </div>
//       <div className="template_Container">
//         {
//           data 
//             .filter((val) => {
//               if(searchTerm == ""){
//                 return val;
//               }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                 return val;
//               }
//             })
//             .map((val) => {
//               return(
//                 <div className="template" key={val.id}>
//                     <img src={val.image} alt="" />
//                     <h3>{val.title}</h3>
//                     <p className="price">${val.price}</p>
//                 </div> 
//               )
//             })
//         }
//       </div>
//     </div> */}
 