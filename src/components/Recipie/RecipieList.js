import React from 'react'
import RecipieCard from './RecipieCard'


const RecipieList = (props) => (
    <div className='flex flex-wrap mx-6 my-10'>
        {
            props.recipies.map( recipie => 
                <RecipieCard key={recipie.id} recipie={recipie}/>
            )
        }
    </div>
)

export default RecipieList