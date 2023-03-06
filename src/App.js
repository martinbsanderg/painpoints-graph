import logo from "./logo.svg";
import "./App.css";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import Flow from "./components/flow/flow.component.jsx";
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './theme.jsx'

import { useContext } from "react";
import { SelectedNodeContext } from "./context/selected-node.contex";

function App() {
  
  
  return (
    <ThemeProvider theme={darkTheme}>
        <Flow />
    </ThemeProvider>
  );
}

export default App;
