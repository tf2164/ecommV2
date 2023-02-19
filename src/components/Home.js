import './pages.css'
import React from "react";
import './Functional.js'


export default function Home(){

        return (
            <>


                <div className="wrapper-hero">
                    <section className="hero-image"> 
                        <div className="hero-content"> 
                            <h3 className="text-main">C <span >G</span> <br/>C</h3>
                            <p>Gaming doesn't have to be stressful</p>
                            <div className="hero-action-btn">
                                <a href="/frontendProducts" className="btn-main">Shop</a>
                            </div>
                        </div>
                        
                    </section>
                   
                </div>
                
                <div className='slider'>
                <div className='slider-wrapper'>


<img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/rajii.png" class="img-responsive" alt=""/>
<img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/nintenSports.jpeg" class="img-responsive" alt=""/>
<img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/stardewVal.jpeg" class="img-responsive" alt=""/>
<img src="https://main.d3uakyc020lweb.amplifyapp.com/gameCovers/cozy-grove.jpg" class="img-responsive" alt=""/>


</div>

<div className='sideInformational'>
Have a Cozy Fall with our new games

</div>
</div>




                </>
    )
    }
