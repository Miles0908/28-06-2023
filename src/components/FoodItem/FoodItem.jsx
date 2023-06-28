import "./index.css";

const FoodItem = ({ foodItem }) => {
  return (
    <div className="FoodItem">
    <h4 className="FoodItem__name">{foodItem?.nome_prodotto}</h4> 
       <p className="FoodItem__quantity">Quantità : {foodItem?.quantita}</p>
       <p className="FoodItem__price">{foodItem?.prezzo} €
       </p>
    </div>
  );
};
export default FoodItem;


