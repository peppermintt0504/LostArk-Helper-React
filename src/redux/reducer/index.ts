import { combineReducers } from "redux";
import leagueReducer from "./league_reducer";
import generalState from "./general_reducer";

const rootReducer = combineReducers({
  leagueReducer,
  generalState
});

export default rootReducer;

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof rootReducer>;