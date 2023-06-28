import { useState, useEffect } from "react";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

import "./App.css";

function App() {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/992c3db2ed790b715a60")
      .then((res) => res.json())
      .then((data) => setFoodItem(data));
  }, []);
  console.log(foodItem)


  return (
    <div className="App">
      <Header />
      <ShoppingList foodItem={foodItem} />
    </div>
  );
}

export default App;
