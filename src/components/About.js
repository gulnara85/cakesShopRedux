import image from '../heartcake.jpg';
import red from '../red.jpg';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


const About = () => {
    return (

        <div className='about'>

<br/>
<br/>
<br/>
<br/>

<div className='container'>
      <h1>Plant Based Cakes </h1>
      </div>
        <div className='images'>
      <img width='30%' className='aboutImage'  alt='heartcake' src= {image} />
      <div className='cakesText'>
            <h3> Vegan and Nutritious Cakes 🌿🌿🌿</h3>
        <p className='text'>Plant Based Cakes is a small batch, plant based dessert shop that combines nutritious desserts with super foods and gourmet flavor. <br/> We are very passionate about healthy foods with healing effects that's why we use only the finest organic plant based ingredients loaded with nutrients vitamins and fiber. <br/>
        Our desserts never contain any refined sugars, gluten or soy. <br/>
        All the cakes and desserts are 100% natural, vegan, gluten free, dairy free, and unprocessed. <br/> 100% guilt free! <br/>
        We make healthy cakes to make the world a healthy place.</p>
        </div>
    </div>
    
    <div className='container'>
    <button ><HashLink to='/cakes#top' className='link'> See selections</HashLink> </button>
</div>

    <div className='images'>
        <div className='btn'>
        <h3>All of our cakes are:</h3>
        <p>
        🌱 💯 plant based <br/>
        🌱Dairy and egg free <br/>
        🌱Gluten and soy free <br/>
        🌱Refined sugar free <br/>
        🌱artificial colors and preservatives free<br/>
        🌱only NATURAL ingredients <br/>
        🌱healthy and nutritious
        </p>
        
        
        </div>
        <img width='30%' className='aboutImage' alt='redCake' src = {red}/>
    </div>


    </div>



        
    )
}

export default About;