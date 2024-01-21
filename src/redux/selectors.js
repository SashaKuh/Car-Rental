export const selectCars = state => state.cars.cars;
export const selectFilteredCars = state => state.cars.filteredCars
export const selectLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.isError;

export const selectFilteredBrand = state => state.filter.selectedBrand;


export const selectFavorites = state => state.favorites.items;
export const selectAdverts = state => state.adverts.items;