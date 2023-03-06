import { useState, useCallback, useEffect } from "react";
import {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { darkTheme } from "../../theme.jsx";
import { initialNodes } from "../node.components.jsx";
import { initialEdges } from "../edges.component";
import { CustomNode } from "../custom-nodes/custom-node.component.jsx";
import { StyledFlow, MiniMapStyled } from "./flow.styles";
import { CustomEdge } from "../custom-edges/custom-edges.component.jsx";

const nodeTypes = {
  highLevelNode: CustomNode,
  specificLevelNode: CustomNode,
  consequenceNode: CustomNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const Flow = (props) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [anySelected, setAnySelected] = useState(false);
  const [relatedNodes, setRelatedNodes] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  //Checking for mobile screen
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nds) => {
        const selected = changes.filter((node) => node.selected === true);
        if (selected.length >= 1) {
          setAnySelected(selected);
          setRelatedNodes(() => []);
        } else {
          setAnySelected(() => false);
          setRelatedNodes(() => []);
        }
        return applyNodeChanges(changes, nds);
      }),
    []
  );

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        anySelected
          ? (node.data.anySelected = true)
          : (node.data.anySelected = false);
        return node;
      })
    );
    return;
  }, [anySelected]);

  useEffect(() => {
    setEdges((edgs) => {
      return edgs.map((edge) => {
        if (!anySelected) {
          return {
            ...edge,
            data: { anySelected: false, connectedToSelected: false },
          };
        }
        const selectedNode = anySelected[0].id;

        if (edge.target === selectedNode || edge.source === selectedNode) {
          setRelatedNodes((prev) => {
            const newValue =
              edge.target === selectedNode ? edge.source : edge.target;
            return { ...prev, [newValue]: newValue };
          });

          return {
            ...edge,
            data: { anySelected: true, connectedToSelected: true },
          };
        } else {
          return {
            ...edge,
            data: { anySelected: true, connectedToSelected: false },
          };
        }
      });
    });
  }, [anySelected]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (relatedNodes[node.id]) {
          return { ...node, data: { ...node.data, relatedToSelected: true } };
        }
        return { ...node, data: { ...node.data, relatedToSelected: false } };
      })
    );
  }, [relatedNodes, anySelected]);

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <StyledFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
    >
      <Background />
      <Controls />
      {!isMobile && <MiniMapStyled
        zoomable
        pannable
        nodeColor={({ type }) => darkTheme[type].bgC}
      />}
    </StyledFlow>
  );
};

export default Flow;
