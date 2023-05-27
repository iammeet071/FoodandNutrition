import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css'

const Homepage = () => {

    const [input,setInput]= useState("");
    const changeInput=(e)=>{
        setInput(e.target.value);
    }
     const passSearch={
        pathname: "/results", 
        searches:input
     }
    return (
        <>
        {/* <div className='home'>
            <input type="text" className="inpitem" onChange={changeInput} value={input} />
            <Link to={`/results/${input}`}>Search</Link>
        </div> */}
        <div class="fill">
      <div class="fill-details">
        <h3>“A recipe has no soul. You, as the cook, must bring soul to the recipe.”

         <br/> – Thomas Keller.</h3>
        
          
      </div>
      <div class="search-box">
        <form class="searchbox-frm" action="#">
          <input className="input-ing" type="text" placeholder="Enter Ingredients..." onChange={changeInput} value={input} />
          <Link to={`/results/${input}`} ><i class="fa fa-search"></i></Link>
        </form>
      </div>
      <div class="fill-details">
      <p>We Provide Video Tutorial of the Recipies based on given Ingredients, Nutrition values of Recipies, also Diet
          according to Nutrition intake per Meal of User and recommend a dish For next Meal of the day with suggested
          time cunsumption.</p>
      </div>
      

    </div>
    </>
    )
}

export default Homepage