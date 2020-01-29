import produce from 'immer';

export default function(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        draft.push(action.payload);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        if (action.amount <= 0) {
          return state;
        }

        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
