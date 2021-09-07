import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/Home.scss";

//const API = "http://localhost:3000/initialState";

/* destructuring props */
const Home = ({ mylist, trends, originals }) => {
  //const initialState = useInitialState(API);
  /* And I'm not going to do a validation to see if I have or don't have data because I'm not going to use it any more,
  because this data is already connected within our application.
  So, before I even render our application our Store is already ready to go */
  return (
    <>
      <Search />

      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {/* item is each object with info of movie (6) */}
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

/* create function mapStateToProps which will bring us the props from our state */
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

/* or a bit cleaner:
const mapStateToProps = ({mylist, trends, originals}) => {
  return {
    mylist,
    trends,
    originals,
  };
}; */

/* mapStateToProps = map of props (is a function that will tell the provider what information we need from the store),
  null = dispatch (called mapDispatchToProps: is used for dispatching (= sending) actions to the store, is an object with the different functions to execute an action in Redux)
  = actions (the second parameter will allow us to map the actions that we are going to execute.
  This means that, if we have some event that we have to call, and it will allow us to execute some reducers, we will bring it from here.)
  as our application does not have any => null
  and afterwards connect to Home */
export default connect(mapStateToProps, null)(Home);
