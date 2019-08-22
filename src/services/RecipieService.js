import recipies from './recipies'


export default class RecipieService {
    getMovies() {
        return recipies ? recipies : []
    }
}