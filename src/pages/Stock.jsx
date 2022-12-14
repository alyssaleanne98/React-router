import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Stock = () => {
  const params = useParams();
  console.log(params);

  const symbol = (params.symbol);
  const [stock, setstock] = useState("null");


  return (
    <div className="Stock">
      {stock === "null" ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h1> {symbol}</h1> 
          </div>
      )}
    </div>
  );
      }


export default Stock