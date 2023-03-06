const consequencesJson = require(".././data/json/consequences.json");
const specificPainpointsJson = require(".././data/json/specificPainpoints.json");
const highlevelPainpointsJson = require(".././data/json/highlevelPainpoints.json");

const consequencesNodes = consequencesJson.map((node, index) => {
  return {
    ...node,
    type: "consequenceNode",
    data: {...node.data, anySelected:false, relatedToSelected: false},
    position: { x: 1200, y: 80 * (index + 1) },
    draggable: false,
    
    
  };
});

const specificPainpointsNodes = specificPainpointsJson.map((node, index) => {
  return {
    ...node,
    type: "specificLevelNode",
    data: {...node.data, anySelected:false, relatedToSelected: false},
    position: { x: 600, y: 80 * index },
    draggable: false,
  };
});

const highlevelPainpointsNodes = highlevelPainpointsJson.map((node, index) => {
  return {
    ...node,
    data: {...node.data, anySelected:false, relatedToSelected: false},
    type: "highLevelNode",
    position: { x: 0, y: 230 * (index + 1) },
    draggable: false,
    
  };
});

export const initialNodes = [
  ...consequencesNodes,
  ...specificPainpointsNodes,
  ...highlevelPainpointsNodes,
];
