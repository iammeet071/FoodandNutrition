import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Card.css';
const Card = (props) => {
    
    return (
        <div className='card'>
                <img src={props.image}></img>
                <h1>{props.title}</h1>
                <div className='carddetails'>
                    <div className='carddet'>
                        {props.tags}
                    </div>
                    
                </div>
                <Link to={`/details/${props.id}`} className='btn'>More</Link>
                
                
        </div>
        
    )
}

export default Card
