import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

interface IProjectListProps {
  onProjectSelect: (e: string) => void;
}

interface IProjectListState {
  anchorEl: null | HTMLElement;
}

export class ProjectList extends React.Component<IProjectListProps, IProjectListState> {
  state: IProjectListState = {
    anchorEl: null,
  };

  onBeginnerClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  onProjectSelect = (e: string) => {
    this.handleClose();
    this.props.onProjectSelect(e);
  };

  get open() {
    return Boolean(this.state.anchorEl);
  }
  render() {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Projects:</Typography>
          <Button
            variant="text"
            color="inherit"
            endIcon={this.open ? <UpIcon /> : <DownIcon />}
            onClick={this.onBeginnerClick.bind(this)}
          >
            Beginner
          </Button>
          <Button variant="text" color="inherit" endIcon={<DownIcon />}>
            Intermediate
          </Button>
          <Button variant="text" color="inherit" endIcon={<DownIcon />}>
            Advanced
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={this.state.anchorEl}
          open={this.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.onProjectSelect("bin2dec")}>Bin2Dec</MenuItem>
        </Menu>
      </>
    );
  }
}
