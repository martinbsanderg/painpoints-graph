export const darkTheme = {
  //Nodes styles
  highLevelNode: { 
    bgC: "#984063",
    relatedBgC: 'rgba(152, 64, 99, 0.58)',
    fontSize: "20px" },

    specificLevelNode: { 
    bgC: "rgba(226, 86, 107, 0.4)",
    relatedBgC: "rgba(226, 86, 107, 0.3)",
    fontSize: "16px" },

  consequenceNode: { 
    bgC: "rgba(241, 155, 126, 0.63)",
    relatedBgC: "rgba(241, 155, 126, 0.4)",
    fontSize: "20px" },

  passiveNodeBgC: 'rgba(255, 255, 255, 0.19)',
  //Flow styles
  bg: "#2D384E",
  minimapMask: "rgba(255, 255, 255, 0.24)",

};

export const NODE_THEMES_MAPPING = {
  highLevelNode: "highLevelNodeBG",
  specificLevelNode: "specificLevelNodeBG",
  consequenceNode: "consequenceNodeBG",
};
