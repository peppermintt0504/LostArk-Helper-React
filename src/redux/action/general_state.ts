import { GENERAL_STATE } from "./types";

interface generalStatePropsType {
  test: any;
}

export function general(test: generalStatePropsType) {
  return {
    type: GENERAL_STATE,
    payload: test,
  };
}