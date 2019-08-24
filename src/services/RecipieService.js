import recipies from './recipies'


class RecipieService {
    getRecipies() {
        return recipies ? recipies : []
    }
}

export default new RecipieService()