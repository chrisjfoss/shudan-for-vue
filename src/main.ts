import type { App } from "vue";

import { Goban, Grid, Line, Vertex, CoordX, CoordY } from "./Components";

export default Goban;
export * as GobanHelper from "./helper";

export const createGoban = () => {
  const install = (app: App) => {
    app.component("Goban", Goban);
    app.component("Grid", Grid);
    app.component("Line", Line);
    app.component("Vertex", Vertex);
    app.component("CoordX", CoordX);
    app.component("CoordY", CoordY);
  };
  return { install };
};
