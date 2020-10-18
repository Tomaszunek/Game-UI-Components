import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NodeRendererProps } from "./types";

export const NodeRenderer = ({
  elements,
  elementsType,
  elementsProps,
}: NodeRendererProps) => {
  const NodeRenderer = styled.div``;
  return elements ? (
    elements.map(({ type, ...props }) => (
      <>
        <NodeRenderer>
          {React.createElement(elementsType ? elementsType : type || "div", {
            ...props,
            ...(elementsProps || {}),
          })}
        </NodeRenderer>
      </>
    ))
  ) : (
    <span>Empty node renderer</span>
  );
};

NodeRenderer.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.any),
};

NodeRenderer.defaultProps = {};
