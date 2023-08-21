import { SAVE_BIG_LEAGUE } from "./types";

interface saveBigLeaguePropsType {
  test: any;
}

export function saveBigLeague(test: saveBigLeaguePropsType) {
  return {
    type: SAVE_BIG_LEAGUE,
    payload: test,
  };
}