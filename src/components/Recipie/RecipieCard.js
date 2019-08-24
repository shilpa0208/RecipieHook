import React from 'react'


const RecipieCard = (props) => (
    <div>
        <li className='text-black'>{props.recipie.title}</li>
    </div>
)

export default RecipieCard