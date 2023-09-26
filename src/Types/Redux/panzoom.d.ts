import { UPDATE_SCALE } from "../../Redux/Panzoom/panzoomActions";

export type panzoomState = {
  scale: number;
};

export type panzoomAction = {
  type: typeof UPDATE_SCALE;
  payload: number;
};
