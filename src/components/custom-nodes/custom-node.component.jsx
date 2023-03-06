import { StyledNode } from "./custom-node.styles";
import React, { memo, useContext } from "react";
import { Handle, Position } from "reactflow";
import { SelectedNodeContext } from "../../context/selected-node.contex";




export const CustomNode = memo((props) => {

  return (
    <StyledNode selected={props.selected} node={props}>
    {
      (props.type==='highLevelNode')
      ? null: <Handle type="target" position={Position.Left} />
    }
      <div>
        {props.data.label}
      </div>
      {
      (props.type==='consequenceNode')
      ? null: <Handle type="source" position={Position.Right} />
    }
    </StyledNode>
  );
});
