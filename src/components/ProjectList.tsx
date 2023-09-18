import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

interface IProjectListProps {
  onProjectSelect: (e: string) => void;
}

interface IProjectListState {
  anchorElBeg: null | HTMLElement;
  anchorElInt: null | HTMLElement;
  anchorElAdv: null | HTMLElement;
}

export class ProjectList extends React.Component<IProjectListProps, IProjectListState> {
  state: IProjectListState = {
    anchorElBeg: null,
    anchorElInt: null,
    anchorElAdv: null,
  };

  onBeginnerClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      anchorElBeg: event.currentTarget,
    });
  }

  onIntermediateClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      anchorElInt: event.currentTarget,
    });
  }

  onAdvancedClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      anchorElAdv: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      anchorElBeg: null,
    });
  };

  onProjectSelect = (e: string) => {
    this.handleClose();
    this.props.onProjectSelect(e);
  };

  get openBeg() {
    return Boolean(this.state.anchorElBeg);
  }

  get openInt() {
    return Boolean(this.state.anchorElInt);
  }

  get openAdv() {
    return Boolean(this.state.anchorElAdv);
  }
  render() {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Projects:</Typography>
          <Button
            variant="text"
            color="inherit"
            endIcon={this.openBeg ? <UpIcon /> : <DownIcon />}
            onClick={this.onBeginnerClick.bind(this)}
          >
            Beginner
          </Button>
          <Button
            variant="text"
            color="inherit"
            endIcon={this.openInt ? <UpIcon /> : <DownIcon />}
            onClick={this.onIntermediateClick.bind(this)}
          >
            Intermediate
          </Button>
          <Button
            variant="text"
            color="inherit"
            endIcon={this.openAdv ? <UpIcon /> : <DownIcon />}
            onClick={this.onAdvancedClick.bind(this)}
          >
            Advanced
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={this.state.anchorElBeg}
          open={this.openBeg}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.onProjectSelect("bin2dec")}>Bin2Dec</MenuItem>
          <MenuItem onClick={() => this.onProjectSelect("borderRadiusPreview")}>
            Border Radius Preview
          </MenuItem>
        </Menu>
      </>
    );
  }
}
