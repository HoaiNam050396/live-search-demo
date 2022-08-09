const initialState = {
    isLoading: false,
    data: [],
  };
  
  export const reducersSearch = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH':
        return {
          ...state,
          data: action.payload
        };
      case 'LOADING':
        return {
          ...state,
          isLoading: action.payload
        }
      default:
        return state;
    }
  };
  