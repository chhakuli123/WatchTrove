export const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case "GET_WATCHLATER_VIDEO":
      return { ...state, watchLater: action.payload };

    case "SAVED_WATCHLATER_VIDEO":
      return { ...state, watchLater: action.payload };

    case "REMOVE_WATCHLATER_VIDEO":
      return { ...state, watchLater: action.payload };
    default:
      return state;
  }
};
