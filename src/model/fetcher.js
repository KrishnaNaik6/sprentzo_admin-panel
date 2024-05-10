const endpoint = "http://localhost:5001/"

class fetcher {
    async sports() {
        const sports = await fetch(endpoint + "sports")
        const jsonData = await sports.json()
        return await jsonData
    }

    async products(limit) {
        const sports = await fetch(endpoint + `products?limit=${limit}`)
        const jsonData = await sports.json()
        return await jsonData
    }
}

export default fetcher