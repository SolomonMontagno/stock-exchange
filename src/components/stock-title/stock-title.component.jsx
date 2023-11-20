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
    </div>
  );
}

export default StockTitle