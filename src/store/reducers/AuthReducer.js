import { CHANGE_NAV_BG } from "../actions/types";

const INITIAL_STATE = {
  user: null,
  userLatLong: null,
  restaurants: null,
  navBackGroundColor: "bg-dark"
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CHANGE_NAV_BG:
      console.log(actions);
      return { ...state, navBackGroundColor: actions.payload };
      break;
    default:
      return state;
  }
};
