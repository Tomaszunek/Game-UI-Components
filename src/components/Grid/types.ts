import { CSSProperties } from "react";

export interface GridProps {
  gridColumnsCount?: number;
  gridRowsCount?: number;

  grid?: string;
  gridArea?: string;

  gridGap?: string;

  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridAutoFlow?: string;

  gridColumn?: string;
  gridColumnEnd?: string;
  gridColumnGap?: string;
  gridColumnStart?: string;

  gridRow?: string;
  gridRowEnd?: string;
  gridRowGap?: string;
  gridRowStart?: string;

  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplate?: string;
  gridTemplateAreas?: string;

  style?: CSSProperties;
  className?: string;

  children?: any;
}
