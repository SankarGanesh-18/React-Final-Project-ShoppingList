import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';import './ShoppingList.css';
function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
 
  return (
    <div className="shopping-list-container">
    <h1 className="shopping-list-header">Shopping List</h1>
   
      <div>
      <input type="text" placeholder="Enter Item Name" value={inputValue} onChange={handleInputChange} className="shopping-list-input" />
      {/* <br/> */}
      <AddIcon onClick={handleAddItem} className="shopping-list-add-button"/>
      </div>
    <ul>
      {items.map((item, index) => (
        <li className="shopping-list-item" key={index}>
          <span className="shopping-list-item-text">{item}</span>
          <DeleteForeverOutlinedIcon onClick={() => handleDeleteItem(index)} className="shopping-list-delete-button"/>
        </li>
      ))}
    </ul>
  
  </div>
  );
}

export default ShoppingList;
