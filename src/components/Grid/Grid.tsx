import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GridProps } from "./types";

export const Grid = ({
  gridColumnsCount,
  gridRowsCount,
  grid,
  gridArea,
  gridGap,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplate,
  gridTemplateAreas,
  style,
  className,
  children,
}: GridProps) => {
  const GridDivTemplateColumns = gridTemplateColumns
    ? gridTemplateColumns
    : `repeat(${gridColumnsCount}, 1fr)`;
  const GridDivTemplateRows = gridTemplateRows
    ? gridTemplateRows
    : `repeat(${gridRowsCount}, 1fr)`;
  const GridDiv = styled.div`
    display: grid;
    grid: ${grid};
    grid-area: ${gridArea};
    grid-gap: ${gridGap};
    grid-auto-columns: ${gridAutoColumns};
    grid-auto-rows: ${gridAutoRows};
    grid-auto-flow: ${gridAutoFlow};
    grid-column: ${gridColumn};
    grid-column-end: ${gridColumnEnd};
    grid-column-gap: ${gridColumnGap};
    grid-column-start: ${gridColumnStart};
    grid-row: ${gridRow};
    grid-row-end: ${gridRowEnd};
    grid-row-gap: ${gridRowGap};
    grid-row-start: ${gridRowStart};
    grid-template-columns: ${GridDivTemplateColumns};
    grid-template-rows: ${GridDivTemplateRows};
    grid-template: ${gridTemplate};
    grid-template-areas: ${gridTemplateAreas};
  `;
  return (
    <GridDiv className={className} style={style}>
      {children}
    </GridDiv>
  );
};

Grid.propTypes = {
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  gridColumnsCount: PropTypes.number,
  gridRowsCount: PropTypes.number,
  gridGap: PropTypes.number,
  children: PropTypes.element,
};

Grid.defaultProps = {
  gridColumnsCount: 2,
  gridRowsCount: 2,
};
