export const initialState = {
  basket: [],
};
const reducer=(action, state) =>{
 console.log(action);
    switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return{state}
    case "REMOVE_FROM_BASKET":
    // LOGIC FOR REMOVING ITEM FROM BASKET
    return {state}
    default:
        return state;   
  }
}
export default reducer