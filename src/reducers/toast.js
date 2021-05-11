const INITIAL_STATE = {
  create: "",
};

export default function toast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TOAST":
      return { ...state, create: action.payload };
    default:
      return state;
  }
}
