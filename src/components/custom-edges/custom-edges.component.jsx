import React, {useContext}from "react";
import { getBezierPath } from "reactflow";
import { lineColorGenerator } from "../../utils/colorGenerator.utils";
import { SelectedNodeContext } from "../../context/selected-node.contex";


export const CustomEdge = ({
  id,
  source,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
  ...props
}) => {
  
    const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const {selectedNode} = useContext(SelectedNodeContext)

 
  const setDefaultStyle =() => {
    if(data.anySelected && !data.connectedToSelected ){
   
      return{stroke: 'rgba(255, 255, 255, 0.1) '}
    }
    if(source.includes("P")) {
        const numberValue= source.substring(1)
        const [r,g,b]=lineColorGenerator(numberValue, 16, 1);

       return data.connectedToSelected? { stroke: `rgba(${r},${g},${b})`, strokeWidth: "1.7px" }:{ stroke: `rgba(${r},${g},${b})` };
      }
    return {}
  }
  const defaultStyle = setDefaultStyle()

  return (
    <>
      <path
        id={id}
        style={defaultStyle}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
};
