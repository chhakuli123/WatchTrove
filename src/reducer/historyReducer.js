export const historyReducer = (state, action) => {
  switch (action.type) {
    case "HISTORY_SAVED":
      return { ...state, watchedVideo: action.payload };

    case "CLEAR_HISTORY":
      return { ...state, watchedVideo: action.payload };

    case "DELETE_HISTORY":
      return { ...state, watchedVideo: action.payload };
    default:
      return state;
  }
};
