import React from 'react'
import '../CSS/NutriCard.css';
const NutriCard = (props) => {
    return (
        <div style={{background:props.bg}} className='nutcards'>
            <div className="nutvalue">
            {props.value}
            </div>
            <div className="nutname">
            <h2>{props.name}</h2>
            <span className="unit">{props.unit}</span>
            </div>
            
        </div>
    )
}

export default NutriCard
