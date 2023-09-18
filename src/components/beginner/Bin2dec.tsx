import { Container, Stack, TextField } from "@mui/material";
import React from "react";

interface IBin2DecProps {}

interface IBin2DecState {
  binValue: string | number;
  decValue: number;
}

export default class Bin2Dec extends React.Component<IBin2DecProps, IBin2DecState> {
  state: IBin2DecState = {
    binValue: "",
    decValue: 0,
  };

  convertBinToDec = (val: string) => {
    let newVal = parseInt(val);
    if (Number.isNaN(newVal)) {
      this.setState({ decValue: 0, binValue: "" });
      return;
    }

    const newDigit = newVal % 10;
    if (newDigit != 0 && newDigit != 1) {
      return;
    }
    this.setState({
      binValue: newVal,
    });
    let mul: number = 1;
    let ans: number = 0;
    while (newVal > 0) {
      const dig = newVal % 10;
      newVal /= 10;
      newVal = Math.floor(newVal);
      ans += dig * mul;
      mul *= 2;
    }
    this.setState({
      decValue: ans,
    });
  };

  render() {
    return (
      <Container>
        <Stack spacing={20}>
          <TextField
            value={this.state.binValue}
            type="number"
            label="Binary number"
            onChange={(e) => this.convertBinToDec(e.target.value)}
          ></TextField>
          <TextField
            type="text"
            value={this.state.decValue}
            label="Decimal number"
            InputProps={{ readOnly: true }}
          ></TextField>
        </Stack>
      </Container>
    );
  }
}
