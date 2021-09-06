import { useState, useEffect } from "react";

/* create a custom hook, like this I can use any API */
const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
  /* I have to return the state */
  return videos;

  /*  without async/await
    useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
    }, []); */
};

export default useInitialState;
