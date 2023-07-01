import React from 'react';
import './LandPage.css';
import qoal_logo from '../../assets/images/qoal-logo.png'
import running_woman from '../../assets/images/Hero_section_1.png'
import vision_block_svg from '../../assets/images/vision.png'
import offer_a from '../../assets/images/offer-1.png'
import offer_b from '../../assets/images/offer-2.png'
import offer_c from '../../assets/images/offer-3.png'
import offer_d from '../../assets/images/offer-4.png'
import gameplay from '../../assets/videos/20220526_221023_2.mp4'
const LandPage = () => {
  return (
   <div className='main-container'>
      <div className='hero_navbar'>
          <img src={qoal_logo} height='45vh' alt='' />
          <div className='hero_navbar-links'>
              <a href='#'><p className='navbar_links'>About Us</p></a>
              <a href='#'><p className='navbar_links_border'>Team</p></a>
              <a href='https://drive.google.com/file/d/1KhqMMyrvpUb_7q_SHMfSFZuzT7r4DaR5/view?usp=sharing'><p className='navbar_links'>White Paper</p></a>
          </div>
          <button className='hero_navbar-button'>Register for Beta Test</button>
      </div>
      <div className="hero_section">
        <div className="hero_section-content"> 
            <h1 className='hero_section-content_h2'>Step into the <span className='hero_section-content_span'>Gaming </span>Metaverse with the 
              <span className='hero_section-content_span'> QoalSome </span>Experience
            </h1>
            <p className='hero_section-content_p'>Enter the war zone, jog to move your character, squat to duck the enemy's bullet and jump to take a shot.</p>
            <div>
              <button className='hero_section-button'>Know More!</button>
            </div>
        </div>
        <div className="hero_section-image">
           <img className='running_woman' src={running_woman} alt=''/>
        </div>
      </div>
      <div className='vision_section'>
         <div className='vision_statement-box'>
              <h1 className='vision_statement-h2'>Qoalsome <span className='orange'>Vision</span></h1>
              <p className='vision_statement-p'>To become the forerunner in the gaming industry by using a non-fungible token (NFT) 
                                               advanced motion gaming experience that enhances the physical and mental wellbeing of the 
                                               users and introduces them to the blockchain. Qoalsome aims to appeal to the three trendiest 
                                               global industries: Gaming, fitness, and wellness. By targeting sore spots and consumer demands, 
                                               Qoalsome seeks to conquer the opportunity to trump billions of dollars worth of a market share.Equipped 
                                               with advanced Qoal tech, we will eclipse all three industries by providing a social space with need-based 
                                               services available to access with NFT tokens all in a single ecosystem.</p>      
         </div>
         <img src={vision_block_svg} width='100%' alt=''/>
      </div>
      <div className='offerings'>
          <div className='offerings_section'>
            <img className='offering_section_images' src={offer_a} alt='' />
            <div className='offerings_section_content'>
              <h2 className='offerings_section_content_head'>With <span className="orange">Play 2 Fit (P2F)</span> and <span className="orange">Fit 2 Earn (F2E)</span> gaming models 
              </h2>
              <p className='offerings_section_content_detail'>Qoal games is out to bewitchingly encourage movement and reshape the indoor gaming and fitness industry.</p>
            </div>
          </div>
          <div className='offerings_section_1'>
            <img className='offering_section_images' src={offer_b} alt='' />
            <div className='offerings_section_content'>
              <h2 className='offerings_section_content_head'>No <span className="orange">expensive hardware</span> required. Just your computer
              </h2>
              <p className='offerings_section_content_detail'>Qoalsome games
                                                  are powered by the award-winning Qoal Tech, a globally
                                                  advanced Artificial intelligence-based, hardware-free,
                                                  Motion Capture technology. It allows operations on everyday
                                                  devices such as Laptops/PC and Smartphones with Cameras
              </p>
            </div>
          </div>
          <div className='offerings_section'>
            <img className='offering_section_images' src={offer_c} alt= ''/>
            <div className='offerings_section_content'>
              <h2 className='offerings_section_content_head'>Our games have <span className="orange">great stories</span> Now cardio won't feel like a routine 
              </h2>
              <p className='offerings_section_content_detail'>We have relevant story plot which will hook you to the game and you would be emotionally connected to it. Fight zombies and protect your daughter in campaign mode and beat players in multiplayer!</p>
            </div>
          </div>
          <div className='offerings_section_1'>
            <img className='offering_section_images' src={offer_d} alt='' />
            <div className='offerings_section_content'>
              <h2 className='offerings_section_content_head'> Now the <span className="orange">workouts</span> will be <span className="orange">rewarded</span> to keep you get going 
              </h2>
              <p className='offerings_section_content_detail'>Using Binance smart chain, Qoal games will allow users to level up skills and earn NFT tokens, the Qoal Coins, in the game These tokens promise long-term engagement with a reward-based structure.</p>
            </div>
          </div>
      </div>
      <div className="gameplay_section">
        <div className="gameplay_video">
          <video controls width='100%'>
             <source src={gameplay} type="video/mp4" />
             Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div className="gameplay_form">
           <h1 className='gameplay_form_heading'>Register Now for the <span className='orange'>BETA</span> Test</h1>
           <form className='gameplay_form_fields'>
              <input className='gameplay_form_inputs' placeholder='Name'/>
              <input className='gameplay_form_inputs' placeholder='Email'/>
              <input className='gameplay_form_inputs' placeholder='Message'/>
              <button className='gameplay_form-button'>I am in!</button>
           </form>
        </div>
      </div>
   </div>
  )
}

export default LandPage;