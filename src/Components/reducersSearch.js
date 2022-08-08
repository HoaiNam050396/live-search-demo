const initialState = {
    isLoading: false,
    data: [],
    text: ''
  };
  
  export const reducersSearch = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH':
        return {
          ...state,
          text: action.payload.data
        };
  
      default:
        return state;
    }
  };
  