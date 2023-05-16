import { ADD_CART, REMOVE_CART } from "../Constants";

const initialState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_CART:
      // console.log('reducer',action);
      return [...state, { cardData: action.data }];
    case REMOVE_CART:
      // console.log('reducer',action);
      state.pop();
      return [...state, ];
    default:
      return state;
  }
}
