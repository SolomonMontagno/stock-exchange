import './stock-title.style.scss'
import { useEffect } from 'react'
import getStockExchangeInfo from '../../getStockExchangeInfo'


const StockTitle = () => {
    useEffect(() => {
        const getStockData = async () => {
            try {
                const data = await getStockExchangeInfo()
                console.log('api response',data)
            } catch (error) {
                console.error('error getting stock data', error)
            }
        }
        getStockData()
    }, [])
    return (
        <div>
            <h2>Does this work?</h2>
            <p>{}</p>
        </div>
    )
}

export default StockTitle