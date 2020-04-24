
const initialState = {
    selectedPost :{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SELECTED_POST':
        return {
            ...state,
            selectedPost: action.payload
        };
    default:
      return state;
  }
}