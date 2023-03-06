import styled from "styled-components";

export const StyledNode = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  flex-direction: column;
  /* width: 130px; */
  font-size: ${({ theme, node, selected }) => theme[node.type].fontSize};
  background-color: ${({ theme, node, selected, ...rest }) => {
    if (!node.data.anySelected || selected) {
      return theme[node.type].bgC;
    }
    else if(node.data.relatedToSelected){
      
      return theme[node.type].relatedBgC
    }
    return theme.passiveNodeBgC

  }};
  color: #fff;
  border: 2px solid ${(props) => (props.selected ? "#ff0072" : "#41436a")};
`;
