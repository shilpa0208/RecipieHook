import React from 'react'


const RecipieCard = (props) => (
    <div className='recipie-card mx-2'>
        <div className='recipie-card card'>
            <img className='recipie-image' src={props.recipie.imageUrl} alt={props.recipie.title} />
            <div>
                <h4>{props.recipie.title}</h4>
                <h6>{props.recipie.subtitle}</h6>
                <p>{props.recipie.description}</p>
            </div>
        </div>
    </div>
)

export default RecipieCard