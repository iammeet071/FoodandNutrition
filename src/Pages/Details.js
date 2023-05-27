import React, { useEffect, useState } from "react";
import "../CSS/Details.css";
import NutriCard from "../Components/NutriCard";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
  let history=useHistory();
  const [data,setData]=useState([]);
  const [nutri,setNutri]=useState([]);
  const { id } = useParams()
  const getData= async()=>{
    const response= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setData(response.data.meals[0]);
    // console.log(response.data.meals[0]);
    const res=await axios.get(`https://api.edamam.com/api/food-database/parser?app_id=6e6c9fbe&app_key=e1656d0de2fb26dcea68c71109e77a49&ingr=${response.data.meals[0].strMeal}`);
    console.log(res.data.parsed[0].food.nutrients);
    setNutri(res.data.parsed[0].food.nutrients);
  }

  useEffect(() => {
      getData();
  }, [])
  return (
    <>

    <div className="Details">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/results">Search</Link>
          </li>
          <li className="breadcrumb-item active">
            {data.strMeal}
          </li>
        </ol>
      </nav>
      <div className="RecipeDetails">
        <img src={data.strMealThumb}></img>
        <h1>{data.strMeal}</h1>
        <h2><u>Nutritions:</u></h2>
        <div className="nutrition">
          <NutriCard
            value={nutri.ENERC_KCAL}
            unit="Kcal"
            name="Calories"
            bg="linear-gradient(to right, #f85032, #e73827)"
          />
          <NutriCard
            value={nutri.CHOCDF}
            unit="gram"
            name="Carbo"
            bg="linear-gradient(to right, #56ab2f, #a8e063)"
          />
          <NutriCard
            value={nutri.PROCNT}
            unit="gram"
            name="Protein"
            bg="linear-gradient(to right, #6190e8, #a7bfe8)"
          />
          <NutriCard
            value={nutri.FAT}
            unit="gram"
            name="Fat"
            bg="linear-gradient(to bottom, #00d2ff, #928dab)"
          />
        </div>
        <h2><u>Ingredients:</u></h2>
        <ul>
          <li>{data.strIngredient1} - {data.strMeasure1}</li>
          <li>{data.strIngredient2} - {data.strMeasure2}</li>
          <li>{data.strIngredient3} - {data.strMeasure3}</li>
          <li>{data.strIngredient4} - {data.strMeasure4}</li>
          <li>{data.strIngredient5} - {data.strMeasure5}</li>
          <li>{data.strIngredient6} - {data.strMeasure6}</li>
          <li>{data.strIngredient7} - {data.strMeasure7}</li>
          <li>{data.strIngredient8} - {data.strMeasure8}</li>
          <li>{data.strIngredient9} - {data.strMeasure9}</li>
        </ul>
        <h2><u>Recipe</u></h2>
        <p className="recipe">{data.strInstructions}</p>
        <h2><u>Tutorial</u></h2>
        <a target="_blank" href={data.strYoutube}>Click Here</a>
      </div>
      <div className="store">Missing some Items? 
      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
    Click Store
  </button>
  
  <div class="modal fade modal-dialog modal-dialog-centered" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Grocery Stores</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4 ml-auto">

                        <h5>BigBasket</h5>
                        <p>Get All Your Ingredients In One Click</p>
                            <p><a href="https://www.bigbasket.com/" target="_blank" role="button" class="btn btn-secondary">Buy</a></p>
                        
                  </div>
                  <div class="col-md-4 ml-auto">
                      
                    <h5>BigBazzar</h5>
                    <p>Get All Your Ingredients In One Click</p>
                    <p><a href="https://shop.bigbazaar.com/" target="_blank" role="button" class="btn btn-secondary">Buy</a></p>
                    
                  </div>
                  <div class="col-md-4 ml-auto">
                    
                    <h5>DMart</h5>
                    <p>Get All Your Ingredients In One Click</p>
                    <p><a href="https://www.dmart.in/" target="_blank" role="button" class="btn btn-secondary">Buy</a></p>
                    
                  </div>
                </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Details;
