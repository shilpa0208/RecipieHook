import React, { Component } from 'react'
import RecipieService from '../../services/RecipieService'
import RecipieList from './RecipieList'


export default class Recipie extends Component {
    constructor() {
        super()

        this.state = {
            recipies: []
        }
    }

    componentDidMount() {
        this.setState({recipies: RecipieService.getRecipies()})
    }

    render() {
        return (
            <div className='h-screen'>
                <RecipieList recipies={this.state.recipies} />
            </div>
        )
    }
}