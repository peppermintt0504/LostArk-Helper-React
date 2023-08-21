import { general } from "../action/general_state";
import { GENERAL_STATE } from "../action/types";

// 리듀서 파라미터 중 initialState의 타입 정의
type GeneralStateType = {
  temp :Number;
};

const initialState = {
  temp: 123,
};

// 리듀서 파라미터 중 action의 타입 정의
type GeneralActionType =
  | ReturnType<typeof general>;

export default function generalState(
  state: GeneralStateType = initialState,
  action: GeneralActionType
) {
  switch (action.type) {
    case GENERAL_STATE:
      return { ...state, temp: state.temp };

    default:
      return state;
  }
}