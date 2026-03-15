import { productsList } from "./products-list";
import { ssRoundPipe } from "./ss-round-pipe";
import { ssSpiralPipe } from "./ss-spiral-pipe";
import { ssBoxSquareRectangularPipes } from "./ss-box-square-rectangular-pipes";
import { ssDesignPipe } from "./ss-design-pipe";
import { ssHalfRoundPipe } from "./ss-half-round-pipe";
import { ssRectangularBoxPipe } from "./ss-rectangular-box-pipe";
import { ssSquareBoxPipe } from "./ss-square-box-pipe";
export { productsList };

export const productDetailsBySlug = {
  "ss-round-pipe": ssRoundPipe,
  "ss-spiral-pipe": ssSpiralPipe,
  "ss-rectangular-box-pipe": ssRectangularBoxPipe,
  "ss-square-box-pipe": ssSquareBoxPipe,
  "ss-design-pipe": ssDesignPipe,
  "ss-half-round-pipe": ssHalfRoundPipe,
};

export const allProductDetails = [
  ssRoundPipe,
  ssSpiralPipe,
  ssBoxSquareRectangularPipes,
  ssDesignPipe,
  ssHalfRoundPipe,
  ssRectangularBoxPipe,
  ssSquareBoxPipe,
  
];
