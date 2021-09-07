const DefaultState = { loading: false, data: {}, errorMsg: "" };

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return { ...state, loading: true, errorMsg: "" };

    case "POKEMON_MULTIPLE_FAIL":
      return { ...state, loading: false, errorMsg: "unable to find Pokemon" };

    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        /* just overwrite parts of data, 
        data is an object and nested objects within objects don`t get copied even though you do spread so you need to make another copy of data 
        we need to create a deep copy of our state 
        [action.pokemonName] like this we don`t need a loader, better for user experience, in the background its still going to run once opened 
        then switched to another pokemon then going back, we cached some of old response */
        data: { ...state.data, [action.pokemonName]: action.payload },
      };

    default:
      return state;
  }
};

export default PokemonMultipleReducer;
