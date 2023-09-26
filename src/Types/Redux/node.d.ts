import { UPDATE_NODE_COORD } from "../../Redux/Node/nodeActions";

export type nodeState = {
  coord: Array<number>;
};

export type nodeAction = {
  type: typeof UPDATE_NODE_COORD;
  payload: Array<number>;
};
