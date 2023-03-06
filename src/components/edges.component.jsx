const edgesJson = require(".././data/json/edges.json");

export const initialEdges = edgesJson.map(({ source, ...edge }, _, array) => {
 
  return { source, ...edge, type: "custom",data:{ anySelected:false, connectedToSelected:false} };
});

