import React from 'react'


const RecipieCard = (props) => (
    <div className='recipie-card mx-2 py-10'>
        <div className='recipie-card card'>
            <img className='recipie-image' src={props.recipie.imageUrl} alt={props.recipie.title} />
            <div>
                <h2 className='pt-2 font-sans text-xl'>{props.recipie.title}</h2>
                <h6 className='mb-2 text-gray-600'>{props.recipie.subtitle}</h6>
                <p className='font-sans text-justify'>{props.recipie.description}</p>
            </div>
        </div>
    </div>
)

export default RecipieCard