import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";
import React from "react";

export default class BorderRadiusPreview extends React.Component {
  state = {
    topleft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };
  updateTopLeft = (val: number) => {
    this.setState({ topleft: val });
  };
  updateTopRight = (val: number) => {
    this.setState({ topRight: val });
  };
  updateBottomLeft = (val: number) => {
    this.setState({ bottomLeft: val });
  };
  updateBottomRight = (val: number) => {
    this.setState({ bottomRight: val });
  };

  get borderRadius() {
    return {
      borderTopLeftRadius: this.state.topleft + "px",
      borderTopRightRadius: this.state.topRight + "px",
      borderBottomLeftRadius: this.state.bottomLeft + "px",
      borderBottomRightRadius: this.state.bottomRight + "px",
    };
  }
  render() {
    return (
      <>
        <Box
          borderLeft={20}
          borderRight={20}
          borderTop={20}
          borderBottom={20}
          height={"400px"}
          width={"400px"}
          margin={"auto"}
          sx={this.borderRadius}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolorum nesciunt
          molestias. Rem, dolorem placeat sed aspernatur voluptas fuga commodi repellat deserunt
          alias neque quibusdam perferendis non ratione quae vitae.
        </Box>
        <Container sx={{ textAlignLast: "center", marginTop: 2, marginBottom: 2 }}>
          <Button
            onClick={() =>
              navigator.clipboard.writeText(JSON.stringify(this.borderRadius, null, 2))
            }
            color="primary"
            size="small"
            endIcon={<ContentCopyIcon />}
            variant="contained"
            type="button"
          >
            Copy CSS Code
          </Button>
        </Container>

        <Stack spacing={4} direction="row" margin={"auto"} width={"100%"}>
          <TextField
            label="Left"
            type="number"
            sx={{ flexGrow: 1 }}
            onChange={(e) => this.updateTopLeft(parseFloat(e.target.value))}
          />
          <TextField
            label="Top"
            type="number"
            sx={{ flexGrow: 1 }}
            onChange={(e) => this.updateTopRight(parseFloat(e.target.value))}
          />
          <TextField
            label="Right"
            type="number"
            sx={{ flexGrow: 1 }}
            onChange={(e) => this.updateBottomLeft(parseFloat(e.target.value))}
          />
          <TextField
            label="Bottom"
            type="number"
            sx={{ flexGrow: 1 }}
            onChange={(e) => this.updateBottomRight(parseFloat(e.target.value))}
          />
        </Stack>
      </>
    );
  }
}
