import { createStore } from 'redux'
let state = {
    count: 0,
};

function countReducer(state = { count: 0 }, action) {
    switch (action.type) {
        // Increment action: increase the count by 1
        case "count/increment":
            return { count: state.count + 1 };
        // Decrement action: decrease the count by 1
        case "count/decrement":
            return { count: state.count - 1 };
        // Default case: return current state if action type is unknown
        default:
            break;
    }
    return state; // Return the current state if no action type matches
}



const store = createStore(countReducer)

store.dispatch({ type: "count/increment" })
store.dispatch({ type: "count/increment" })

console.log(store.getState())
store.dispatch({ type: "count/decrement" })

console.log(store.getState())// { count: 1 }
export default store;