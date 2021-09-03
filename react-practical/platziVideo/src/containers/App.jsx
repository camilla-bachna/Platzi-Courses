import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
  const API = "http://localhost:3000/initialState";
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

  console.log(videos);

  /*  without async/await
    useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
    }, []); */

  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="Mi Lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
