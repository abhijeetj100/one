import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MainToolbar } from "./components/Maintoolbar";
import Bin2Dec from "./components/beginner/Bin2dec";
const ProjectComponents: { [k: string]: JSX.Element } = {
  bin2dec: <Bin2Dec />,
  "": <>Hello World</>,
};

function IsComponent({ componentName }: { componentName: string }) {
  return ProjectComponents[componentName] || <></>;
}

function App() {
  const [theme, setTheme] = useState(createTheme({ palette: { mode: "dark" } }));
  const [selectedProject, setSelectedProject] = useState("");

  const onProjectSelect = (projectName: string) => {
    console.log("From App.tsx", projectName);
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

// class App extends React.Component {
//   state = {
//     theme: createTheme({
//       palette: {
//         mode: "dark",
//       },
//     }),
//     counter: 1
//   };

//   onProjectSelect(e: React.MouseEvent<HTMLButtonElement>) {
//     this.setState({
//       counter: this.state.counter+1
//     })
//     console.log(e.currentTarget);
//     console.log(this.state.counter);
//   }

//   render() {
//     return (
//       <ThemeProvider theme={this.state.theme}>
//         <CssBaseline />
//         {/* <> */}
//         <MainToolbar onChange={this.onProjectSelect.bind(this)}/>
//         <Bin2Dec />
//         {/* </> */}

//       </ThemeProvider>
//     );
//   }
// }

export default App;
