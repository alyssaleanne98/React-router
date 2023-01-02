import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";


function Stock () {
  const apikey = '7713e117fae3eb3b825cbc7e4ea18895'
  const params = useParams();
  const symbol = (params.symbol);
  //const symbol has to be above the url or else there will be a reference error "cannot access symbol before initialization"
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`

  
  const [stock, setStock] = useState("null");

  const getStock = async () => {
    const response = await fetch (url)
    const data = await response.json()
    setStock(data)
  }
  useEffect(() =>{
    getStock()
  }, [])
  


  return (
    <div className="Stock">
      {stock === "null" ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h3>Price: ${stock[0].price}</h3>
          <h3>Industry: {stock[0].industry}</h3>
          <h3>CEO: {stock[0].ceo}</h3>
          <h3>City: {stock[0].city}</h3>
          <h3>State: {stock[0].state}</h3>
        </div>
      )}
    </div>
  );
}


export default Stock;