import type{ Action } from "./action";
import type{ State } from "./reducerType";


export const init ={
    rows: []}

 const rowsReducer = (state: State = init, action: Action) : State => {
    switch (action.type) {
        case "rows/load":
            return { ...state, rows: action.payload };
        case "rows/add":
            return { ...state, rows: [...state.rows, ...action.payload] };
        default:
            return state;
    }
}

export default rowsReducer