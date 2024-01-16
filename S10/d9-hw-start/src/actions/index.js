export const deleteFav = (job) => {
  return { type: "REMOVE_FAV", payload: job };
};

export const addFavoriutes = (job) => {
  return { type: "ADD_FAV", payload: job };
};
