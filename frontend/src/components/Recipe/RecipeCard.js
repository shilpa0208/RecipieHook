import React from 'react'


const RecipieCard = (props) => (
    <div className='recipe-card mx-2 py-10'>
        <div className='recipe-card card'>
            <img className='recipe-image' src={props.recipe.imageUrl} alt={props.recipe.title} />
            <div>
                <h2 className='pt-2 font-sans text-xl'>{props.recipe.title}</h2>
                <h6 className='mb-2 text-gray-600'>{props.recipe.subtitle}</h6>
                <p className='font-sans text-justify'>{props.recipe.description}</p>
            </div>
        </div>
    </div>
)

export default RecipieCard