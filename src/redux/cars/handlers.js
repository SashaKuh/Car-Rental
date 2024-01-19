export const handleCars = (state, { payload }) => {
    state.isLoading = false;
    state.isError = null;
    state.cars = [...state.cars, ...payload];
};

export const handleCarsError = (state, { payload }) => {
    state.isLoading = false;
    state.isError = payload;
};

export const handlePandingCars = state => {
    state.isLoading = true
};
