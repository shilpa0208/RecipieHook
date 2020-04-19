class API {

    getRecipies() {
        return this.__request('GET', '/api/v1/recipies')
    }

    setHeaders() {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    async __request(method, uri, body = undefined) {
        const headers = this.setHeaders()

        try { 
            const response = await fetch(uri, {
                headers,
                method,
                body: JSON.stringify(body)
            })
            return response.json()
        } catch (error) {
            console.error(`Error sending API to ${uri} (${method}): ${JSON.stringify(body)}`)
            throw error
        }
    }
}

export default new API()
