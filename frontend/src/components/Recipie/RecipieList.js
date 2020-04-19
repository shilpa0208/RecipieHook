import React from 'react'
import RecipieCard from './RecipieCard'


const RecipieList = (props) => (
    <div className='flex flex-wrap'>
        {
            props.recipes.map( recipe => 
                <RecipieCard key={recipe.id} recipe={recipe}/>
            )
        }
    </div>
)

export default RecipieList