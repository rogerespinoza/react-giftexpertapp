import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import "./GifGrid.css";
import { getGifs } from "../helpers/getGifs";

export default function GifGrid({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  // const getGifs = async () => {
  //   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
  //     category
  //   )}&limit=10&api_key=hwMWReRZZy4FzJakgzhDRdbKUrwwQl9U`;
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();
  //   const gifs = data.map(img => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       // url: img.url
  //       url: img.images?.downsized_medium.url,
  //     };
  //   });

  //   // console.log(gifs);
  //   setImages(gifs);
  // };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}
