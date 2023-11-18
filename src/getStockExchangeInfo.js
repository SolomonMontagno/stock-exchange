    
    const apiKey = process.env.alphavantage;
    const alphaApiUrl = ''
    
const getStockExchangeInfo = async () => {
        try {
            const response = await fetch(alphaApiUrl)
            if(!response.ok) {
                throw new Error('Error in fetch')
            }
        
        const data = response.json()
        return data
    } catch (error) {
        console.error('fetch error:', error)
    }
}