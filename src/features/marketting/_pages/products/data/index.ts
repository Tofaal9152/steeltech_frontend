import { productsList } from "./products-list";
import { ssRoundPipe } from "./ss-round-pipe";
import { ssSpiralPipe } from "./ss-spiral-pipe";
import { ssBoxSquareRectangularPipes } from "./ss-box-square-rectangular-pipes";
import { ssDesignPipe } from "./ss-design-pipe";
import { ssHalfRoundPipe } from "./ss-half-round-pipe";
import { ssRectangularBoxPipe } from "./ss-rectangular-box-pipe";
import { ssSquareBoxPipe } from "./ss-square-box-pipe";
import { ssSheet } from "./ss-sheet";
import { ssRod } from "./ss-rod";
import { ssAngle } from "./ss-angle";
import { ssFlatBar } from "./ss-flat-bar";
import { ssSchedulePipe } from "./ss-schedule-pipe";
import MixedPipeDetails from "../ui/Slug/MixedPipeDetails";
import { mixedPipe } from "./mixed-Pipe";
export { productsList };

export const productDetailsBySlug = {
  "ss-round-pipe": ssRoundPipe,
  "ss-square-box-pipe": ssSquareBoxPipe,
  "ss-rectangular-box-pipe": ssRectangularBoxPipe,
  "ss-half-round-pipe": ssHalfRoundPipe,
  "ss-spiral-pipe": ssSpiralPipe,
  "ss-design-pipe": ssDesignPipe,
  "ss-sheet": ssSheet,
  "ss-rod": ssRod,
  "ss-angle": ssAngle,
  "ss-flat-bar": ssFlatBar,
  "ss-schedule-pipe": ssSchedulePipe,
  "ss-mixed-pipe": mixedPipe,
};

export const allProductDetails = [
  ssRoundPipe,
  ssSquareBoxPipe,
  ssSpiralPipe,
  ssBoxSquareRectangularPipes,
  ssDesignPipe,
  ssHalfRoundPipe,
  ssRectangularBoxPipe,
  ssSheet,
  ssRod,
  ssAngle,
  ssFlatBar,
  ssSchedulePipe,
  mixedPipe,
];
