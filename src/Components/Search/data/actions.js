export const search = (payload) => {
    return {
      type: 'SEARCH',
      payload: payload,
    };
  };

  export const loading = (payload) => {
    return {
      type: 'LOADING',
      payload: payload,
    };
  };
  