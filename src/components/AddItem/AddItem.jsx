import "./index.css";
import { useState } from "react";
const AddItem = ({ Add }) => {
  const [addText, setAddText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addText.trim() !== "") {
      Add(addText);
      setAddText("");
    }
  };

  return (
    <div className="AddItem">
      <form className="Add__Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Aggiungi un nuovo elemento"
          value={addText}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddItem;
