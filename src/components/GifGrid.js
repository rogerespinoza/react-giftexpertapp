import React from "react";
import { GifGridItem } from "./GifGridItem";
import "./GifGrid.css";
import { useFetchGifts } from "../hooks/useFetchGifts";

export default function GifGrid({ category }) {
  const { loading, data: images } = useFetchGifts(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading ? (
        <p className="animate__animated animate__flash">Loading</p>
      ) : (
        <div className="card-grid">
          {images.map(img => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
}
