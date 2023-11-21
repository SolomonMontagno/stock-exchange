import './stock-title.style.scss'
import { useEffect, useState } from 'react'
import getStockExchangeInfo from '../../getStockExchangeInfo'


const StockTitle = () => {
  const [newStock, setNewStock] = useState();

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await getStockExchangeInfo();
        console.log("api response", data);
        setNewStock(data);
      } catch (error) {
        console.error("error getting stock data", error);
      }
    };
    getStockData();
  }, []);

if(!newStock) {
    return <p>Loading...</p>

}
  const metaData = newStock["Meta Data"];
    const TimeSeries = newStock["Time Series (5min)"]
  return (
    <div>
      <h2>Does this work?</h2>
      {metaData && (
        <div>
          <p>Symbol: {metaData["2. Symbol"]}</p>
          <p>Last Refreshed: {metaData["3. Last Refreshed"]}</p>
          {/* Add more properties as needed */}
        </div>
      )}
      <div>
        {TimeSeries && (
            <div>
                <h3>
                    Time Series Data
                </h3>
                {Object.entries(TimeSeries).map(([timestamp, data]) => (
                    <div key={timestamp}>
                        <p>Timestamp: {timestamp}</p>
                        <p>Open: {data["1. open"]}</p>
                        <p>High: {data["2. high"]}</p>
                        <p>Low: {data["3. low"]}</p>
                        <p>Close: {data["4. close"]}</p>
                    </div>
                ))}
            </div>
)}
      </div>
    </div>
  );
}

export default StockTitle