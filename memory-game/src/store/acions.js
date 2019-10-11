export const SELECT_CARD = "SELECT_CARD";
export const LOCK = "LOCK";
export const OPEN_CARD = "OPEN_CARD";
export const SET_MATCH = "SET_MATCH";
export const CLOSE_CARDS = "CLOSE_CARDS";

export const selectCard = key => ({
  type: SELECT_CARD,
  key
});
