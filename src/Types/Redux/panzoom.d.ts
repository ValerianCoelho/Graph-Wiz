import { UPDATE_SCALE } from "../../Redux/Panzoom/panzoomActions";

export type panzoomState = {
  scale: number;
  pan: {x: number, y: number}
};

export type panzoomAction = {
  type: typeof UPDATE_SCALE;
  payload: number | object;
};
