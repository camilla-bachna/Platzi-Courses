import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getVideoSource } from "../actions";
import PropTypes from "prop-types";
import "../assets/styles/components/Player.scss";
import NotFound from "./NotFound";

const Player = (props) => {
  const { match, playing, history, getVideoSource } = props;

  /* This part is being sent to us by Router at the moment in which we are generating this route, which was /player/:id
  this way we are making a match with the parameters that we are receiving
  it searches for the video with this id */
  const { id } = match.params;

  /* using double destructuring: const {history,  match: {params: {id}}} = props; */

  const hasPlaying = Object.keys(playing).length > 0;
  //console.log("hasPlaying", hasPlaying);

  /* function that is available inside the props as it is encapsulated in browser router */
  const handleButton = () => history.goBack();

  /* pass it the ID it needs so that it will then go to our reducer,
  filter by ID, and in this way we will obtain in the state the array with the ID and get the source */
  useEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleButton}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to="/404/" />, 0)
    /* or <NotFound /> */
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = { getVideoSource };

Player.propTypes = {
  playing: PropTypes.object,
  getVideoSource: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
