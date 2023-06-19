export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.payload.videos,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload.categoryName,
      };
    default:
      return state;
  }
};
