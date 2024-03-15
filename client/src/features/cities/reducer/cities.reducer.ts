import type{ Action } from "./action";
import type{ State } from "./reducerType";


export const init ={
    cities: []}

 const citiesReducer = (state: State = init, action: Action) : State => {
    switch (action.type) {
        case "cities/load":
            return { ...state, cities: action.payload };
        default:
            return state;
    }
}

export default citiesReducer