export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: [...state.people, action.person],
        isModalOpen: true,
        modalContent: 'Item Added'
      };
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'No Value'
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        modalContent: ''
      };
    case 'REMOVE_ITEM':
      const list = state.people.filter((person) => person.id !== action.id );
      return {
        ...state,
        people: list,
        isModalOpen: true,
        modalContent: 'Item Removed'
      };
    default:
      return state;
  }
};