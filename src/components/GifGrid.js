import React from "react";
import { GifGridItem } from "./GifGridItem";
import "./GifGrid.css";
import { useFetchGifts } from "../hooks/useFetchGifts";

export default function GifGrid({ category }) {
  const { loading, data: images } = useFetchGifts(category);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>

      {loading ? (
        <p>Loading</p>
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
