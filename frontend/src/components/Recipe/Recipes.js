import React, { useState, useEffect } from 'react'
import RecipieList from './RecipeList'
import api from '../../api'


const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()      
    }, [])

    const getRecipes = async () => {
        const res = await api.getRecipes()
        setRecipes(res)  
    }

    return (
        <div className='h-screen'>
            <div className='flex flex-row'>
                <RecipieList recipes={recipes} />
            </div>
        </div>
    )
}

export default Recipes