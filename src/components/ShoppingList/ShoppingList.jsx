import "./index.css";
import FoodItem from "../FoodItem";
const ShoppingList = ({ foodItem }) => {
  return (
    <div className="ShoppingList">
      <ul>
        {foodItem?.map((foodItem) => (
          <li key={foodItem.id}>
            <FoodItem foodItem={foodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingList;
