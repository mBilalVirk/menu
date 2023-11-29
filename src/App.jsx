import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
import "./App.css";

const allCategories = ['all', ... new Set(items.map((item)=> item.category))]


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, SetCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    // Filter items based on the provided category
    const newItems = items.filter((item) => item.category === category);
  
    // Set the state 'menuItems' with the filtered items
    setMenuItems(newItems);
  
  };
  

  return (
    <main>
      <section className="menu section">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <br />
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} categories={categories} />
      </section>
    </main>
  );
}

export default App;
