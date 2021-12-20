import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect (() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x1370802f4A5858ceA56aAb35E48A3EFccF2Fc687&order_direction=asc');

      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Punklist punkListData={punkListData}/>
    </div>
  );
}

export default App;
