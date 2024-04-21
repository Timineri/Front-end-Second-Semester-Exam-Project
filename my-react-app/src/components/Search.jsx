import React, { useState } from "react";
import "../css/SearchBar.css"
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const itemList = [
   
    { name: "Banana", price: "$0.99" },
    { name: "Orange", price: "$1.49" },
    { name: "Strawberry", price: "$2.49" },
    { name: "Grapes", price: "$3.99" },
    { name: "Watermelon", price: "$4.99" },
  ];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = itemList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    const filtered = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="item-list">
        {searchQuery === "" ? (
          itemList.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))
        ) : (
          <li>No matching items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;