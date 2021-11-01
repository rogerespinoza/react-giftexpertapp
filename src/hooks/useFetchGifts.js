import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(imgs => {
      setTimeout(() => {
        setState({
          loading: false,
          data: imgs,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
