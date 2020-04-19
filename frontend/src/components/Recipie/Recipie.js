import React, { Component } from 'react'
import RecipieList from './RecipieList'
import api from '../../api'


export default class Recipie extends Component {
    constructor() {
        super()

        this.state = {
            recipies: []
        }
    }

    async componentDidMount() {
        this.setState({recipies: await api.getRecipies()})
    }

    render() {
        return (
            <div className='h-screen'>
                <div className='flex flex-row'>
                    <RecipieList recipies={this.state.recipies} />
                </div>
            </div>
        )
    }
}