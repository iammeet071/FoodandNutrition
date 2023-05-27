import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';


const Results = (props) => {
    let history=useHistory();
    const {name}=useParams();
    const [items,setItems]=useState([]);
    // console.log(props.location.searches);
    // let ingre=props.location.searches.split(" ");
    // const query=ingre.toString();
    
    const key="53e13b9e47934178a14816a9ad836535";
    const prevComp=()=>{
        history.push('/');
    }

    useEffect(() => {
        const searchquery= async()=>{
            // const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${key}`);
            // console.log(response);
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            console.log(response.data.meals);
            setItems(response.data.meals);
        }
        searchquery();
    }, [])
    return (
        <>
        <button onClick={prevComp}  className='backbtn'>◀</button>
        <div className="results">
        
        {
            items.map((item)=>{
                  return(<Card id={item.idMeal} tags={item.strTags} key={item.idMeal} title={item.strMeal} image={item.strMealThumb}/>);
            })
        }
            
        </div>
        </>
    )
}

export default Results
