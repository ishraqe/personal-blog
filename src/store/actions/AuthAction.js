import { CHANGE_NAV_BG } from "./types";

export const changeNavColor = () => {
  return {
    type: CHANGE_NAV_BG,
    payload: "transparent"
  };
};
