import type{ Action } from "./action";
import type{ State } from "./reducerType";


export const init ={
    lists: []}

 const listsReducer = (state: State = init, action: Action) : State => {
    switch (action.type) {
        case "lists/load":
            return { ...state, lists: action.payload };
            case "lists/add":
                return { ...state, lists: [...state.lists, action.payload] };
            case "lists/remove":
                return { ...state, lists: state.lists.filter((list) => list.id !== action.payload) };
        default:
            return state;
    }
}

export default listsReducer