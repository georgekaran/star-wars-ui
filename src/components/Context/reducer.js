export const reducer = (state, action) => {
  switch (action.type) {
      case 'CHANGE_MOVIE':
          return { ...state, selectedMovie: action.selectedMovie }
      case 'FETCH_CONTEXT':
          return { state }
      default:
          return state
  }
};