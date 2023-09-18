import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { MouseEventHandler } from "react";
import { ProjectList } from "./ProjectList";

interface IMainToolbarProps {
  onChange: (e: string) => void;
}

export class MainToolbar extends React.Component<IMainToolbarProps> {
  handleClick = (projectName: string) => {
    this.props.onChange(projectName);
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            ONE
          </Typography>
          <ProjectList onProjectSelect={this.handleClick} />
        </Toolbar>
      </AppBar>
    );
  }
}
