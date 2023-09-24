import { useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

import "react-toastify/dist/ReactToastify.css";
import BorderRadiusPreview from "./components/beginner/BorderRadiusPreview";
import Bin2Dec from "./components/beginner/Bin2dec";
import { CSVtoJSON } from "./components/beginner/CSVtoJSON";
import { ToastContainer } from "react-toastify";
import { MainToolbar } from "./components/Maintoolbar";
import { Calculator } from "./components/beginner/Calculator";
const ProjectComponents: { [k: string]: JSX.Element } = {
  bin2dec: <Bin2Dec />,
  borderRadiusPreview: <BorderRadiusPreview />,
  csvToJson: <CSVtoJSON />,
  calculator: <Calculator />,
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
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
}

export default App;
