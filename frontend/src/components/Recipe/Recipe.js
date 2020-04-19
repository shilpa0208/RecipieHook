import React, { Component } from 'react'
import RecipieList from './RecipeList'
import api from '../../api'


export default class Recipe extends Component {
    constructor() {
        super()

        this.state = {
            recipes: []
        }
    }

    async componentDidMount() {
        this.setState({recipes: await api.getRecipes()})
    }

    render() {
        return (
            <div className='h-screen'>
                <div className='flex flex-row'>
                    <RecipieList recipes={this.state.recipes} />
                </div>
            </div>
        )
    }
}