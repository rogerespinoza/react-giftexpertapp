import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["batman"]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "newElement"]);

  //   // Nota
  //   // funcion set de useState tiene callback de estado previo
  //   setCategories(categ => [...categ, "newElement"]);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      {/* <button onClick={handleAdd}>Add Element</button> */}

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map(category => {
          // return <li key={category}>{category}</li>
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
}
