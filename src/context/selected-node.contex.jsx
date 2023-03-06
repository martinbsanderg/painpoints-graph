import { createContext, useState, useEffect } from 'react';

export const SelectedNodeContext = createContext({
    selectedNode: null,
    setSelectedNode: ()=>null,
})

export const SelectedNodeProvider = ({children}) =>{
    const [selectedNode, setSelectedNode] = useState("halla")
    const changeSelectedNode =(node)=>{
        setSelectedNode(node)

    }
    const value = {selectedNode, changeSelectedNode}




    return <SelectedNodeContext.Provider value={value}>{children}</SelectedNodeContext.Provider>
}