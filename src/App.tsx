import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MainToolbar } from "./components/Maintoolbar";
import Bin2Dec from "./components/beginner/Bin2dec";
import BorderRadiusPreview from "./components/beginner/BorderRadiusPreview";
const ProjectComponents: { [k: string]: JSX.Element } = {
  bin2dec: <Bin2Dec />,
  borderRadiusPreview: <BorderRadiusPreview />,
  "": <>Hello World</>,
};

function IsComponent({ componentName }: { componentName: string }) {
  return ProjectComponents[componentName] || <></>;
}

function App() {
  const [theme, setTheme] = useState(createTheme({ palette: { mode: "dark" } }));
  const [selectedProject, setSelectedProject] = useState("");

  const onProjectSelect = (projectName: string) => {
    setSelectedProject(projectName);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainToolbar onChange={onProjectSelect} />
      <IsComponent componentName={selectedProject} />
    </ThemeProvider>
  );
}

export default App;
