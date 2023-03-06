import styled from "styled-components";
import { ReactFlow, MiniMap } from "reactflow";

export const StyledFlow = styled(ReactFlow)`
    background-color: ${(props) => props.theme.bg};
`

export const MiniMapStyled = styled(MiniMap)`
  background-color: ${(props) => props.theme.bg};
  border-radius: 5px;
  

  .react-flow__minimap-mask {
    fill: ${(props) => props.theme.minimapMask};
    border-radius: 5px;

  }

`