const initial_state = {
    user: null,
    favourites: null,
    postData: null
  };
  
  const reducer = (state = initial_state, action) => {
    switch (action.type) {
      case "UPDATE_USER": {
        return { ...state, user: action.user };
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;