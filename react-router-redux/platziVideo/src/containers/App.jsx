import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return (
    /* initialState.length === 0 ? <h1>Loading...</h1>: ( like this initialState.mylist? etc is not necessary */
    <div className="App">
      <Header />
      <Search />

      {/* This way it first asks if initialState.mylist is undefined and if it is not then it asks if length is > 0. */}
      {initialState.mylist?.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {/* item is each object with info of movie (6) */}
          {initialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
