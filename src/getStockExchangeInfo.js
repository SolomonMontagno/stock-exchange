    
    const apiKey = process.env.alphavantage;
    const alphaApiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=RIVN&interval=5min&apikey=${apiKey}`

const getStockExchangeInfo = async () => {
        try {
            const response = await fetch(alphaApiUrl)
            if(!response.ok) {
                throw new Error('Error in fetch')
            }
        
        const data = await response.json()
        return data
    } catch (error) {
        console.error('fetch error:', error)
        throw error
    }
}



export default getStockExchangeInfo