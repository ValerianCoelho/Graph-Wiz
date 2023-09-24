export type panzoomState = {
  scale: number;
};

export type panzoomAction = {
  type: typeof UPDATE_SCALE;
  payload: number;
};
