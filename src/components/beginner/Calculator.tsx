import { Box, Stack, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const buttonCss = {
  borderRadius: "10px",
  height: "65px",
  // width: "65px",
  margin: "5px",
  // boxShadow: "0px 0px 4px 6px red",
};

const zeroButtonCss = {
  borderRadius: "10px",
  // height: "65px",
  // width: "65px",
  margin: "5px",
  // boxShadow: "0px 0px 4px 6px red",
};

const NumberButton = ({
  digit,
  onNumberClick,
}: {
  digit: number;
  onNumberClick: (value: number) => void;
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={buttonCss}
      disableRipple
      onClick={() => onNumberClick(digit)}
    >
      {digit}
    </Button>
  );
};

export const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);

  const allClear = currentNumber == 0;
  const clearCurrent = currentNumber != 0;

  const onNumberClick = (digit: number) => {
    const newNumber = currentNumber * 10 + digit;
    setCurrentNumber(newNumber);
  };

  const onClear = () => {
    if (clearCurrent) {
      setCurrentNumber(0);
    } else {
      setResult(0);
    }
  };

  enum Operation {
    invertSign,
    add,
    minus,
    mult,
    div,
    perc,
    decimal,
    clear,
    equal,
  }

  const perfOp = (op: Operation) => {
    let tempResult = 0;
    if (result == 0) {
      tempResult = currentNumber;
      setResult(tempResult);
      setCurrentNumber(0);
      return;
    } else {
      tempResult = result;
    }
    switch (op) {
      case Operation.clear:
        onClear();
        break;
      case Operation.add:
        setResult(tempResult + currentNumber);
        setCurrentNumber(0);
        break;
      case Operation.minus:
        setResult(tempResult - currentNumber);
        setCurrentNumber(0);
        break;
      case Operation.mult:
        setResult(tempResult * currentNumber);
        setCurrentNumber(0);
        break;
      case Operation.div:
        if (currentNumber == 0) {
          toast.dismiss();
          toast("Cannot divide by 0", {
            type: "error",
          });
          return;
        }
        setResult(tempResult / currentNumber);
        setCurrentNumber(0);
        break;
    }
  };

  useEffect(() => {}, [result]);

  return (
    <Stack
      textAlign={"center"}
      flexGrow={1}
      maxWidth={"300px"}
      alignSelf={"center"}
      justifyContent={"center"}
    >
      <Stack direction={"column"} border={"10px"} gap={2}>
        <TextField
          value={result}
          size="medium"
          sx={{ flexGrow: 1, textAlignLast: "end" }}
          variant="outlined"
          label="Result"
        />
        <TextField
          value={currentNumber}
          size="medium"
          sx={{ flexGrow: 1, textAlignLast: "end" }}
          variant="outlined"
          label="Enter your number"
        />
      </Stack>
      <Stack direction={"row"}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          disableRipple
          sx={buttonCss}
          onClick={() => perfOp(Operation.clear)}
        >
          {allClear ? "AC" : "C"}
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.invertSign)}
        >
          +/-
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.perc)}
        >
          %
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.div)}
        >
          /
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <NumberButton digit={7} onNumberClick={onNumberClick} />
        <NumberButton digit={8} onNumberClick={onNumberClick} />
        <NumberButton digit={9} onNumberClick={onNumberClick} />
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.mult)}
        >
          *
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <NumberButton digit={4} onNumberClick={onNumberClick} />
        <NumberButton digit={5} onNumberClick={onNumberClick} />
        <NumberButton digit={6} onNumberClick={onNumberClick} />
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.minus)}
        >
          -
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <NumberButton digit={1} onNumberClick={onNumberClick} />
        <NumberButton digit={2} onNumberClick={onNumberClick} />
        <NumberButton digit={3} onNumberClick={onNumberClick} />
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.add)}
        >
          +
        </Button>
      </Stack>
      <Stack direction={"row"}>
        <Button
          variant="contained"
          size="large"
          disableRipple
          sx={Object.assign({ flexGrow: 2 }, zeroButtonCss)}
          onClick={() => onNumberClick(0)}
        >
          0
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.decimal)}
        >
          .
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={buttonCss}
          disableRipple
          onClick={() => perfOp(Operation.equal)}
        >
          =
        </Button>
      </Stack>
    </Stack>
  );
};
