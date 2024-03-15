import { combineReducers } from "redux";
import citiesReducer from "../features/cities/reducer/cities.reducer";
import listsReducer from "../features/lists/reducer/lists.reducer";
import rowsReducer from "../features/rows/reducer/rows.reducer";


const rootReducer = combineReducers({
    cities: citiesReducer,
    lists: listsReducer,
    rows: rowsReducer
});

export default rootReducer