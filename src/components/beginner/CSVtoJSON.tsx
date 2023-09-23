import { Button, Stack, TextareaAutosize, Typography } from "@mui/material";
import { ChevronRight as RightIcon } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";
import { parse } from "papaparse";

export const CSVtoJSON = () => {
  const [csvData, setCsvData] = useState("");
  const [jsonData, setJsonData] = useState("");

  const onEnterCsvData = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setCsvData(e.currentTarget.value);
  }

  const convert = () => {
    toast("Converted CSV to JSON", {
      type: "success",
    });

    const convertedData = parse<string[]>(csvData);

    const hdrs = convertedData.data[0];
    const data = convertedData.data.slice(1);

    const convertedJson: { [k: string]: string }[] = [];

    for (const row of data) {
      const jsonData: { [k: string]: string } = {};
      for (let i = 0; i < hdrs.length; i++) {
        jsonData[hdrs[i]] = row[i];
      }
      convertedJson.push(jsonData);
    }
    setJsonData(JSON.stringify(convertedJson, null, 2));
  };

  return (
    <Stack gap={5}>
      <Stack
        direction="row"
        gap={10}
        sx={{ margin: "auto", paddingTop: "30px" }}
        height={"auto"}
        justifyContent={"center"}
      >
        <Stack direction={"column"} gap={2}>
          <Typography variant="h3" flexGrow={0} alignSelf={"center"}>
            CSV
          </Typography>
          <TextareaAutosize
            value={csvData}
            onChange={onEnterCsvData}
            style={{
              borderRadius: 30,
              padding: 25,
              boxShadow: "0px 0px 10px 10px grey",
              width: "450px",
              height: "350px",
              minWidth: "200px",
              minHeight: "100px",
              maxWidth: "800px",
              flexGrow: 1,
              resize: "none",
              overflow: "auto",
            }}
          />
        </Stack>

        <Stack direction={"column"} gap={2}>
          <Typography variant="h3" flexGrow={0} alignSelf={"center"}>
            JSON
          </Typography>
          <TextareaAutosize
            value={jsonData}
            style={{
              borderRadius: 30,
              padding: 25,
              boxShadow: "0px 0px 10px 10px grey",
              width: "450px",
              height: "350px",
              minWidth: "200px",
              minHeight: "100px",
              maxWidth: "800px",
              flexGrow: 1,
              resize: "none",
              overflow: "auto",
            }}
            readOnly
          />
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent={"center"}>
        <Button
          variant="contained"
          startIcon={<RightIcon />}
          endIcon={<RightIcon />}
          onClick={convert}
        >
          Convert
        </Button>
      </Stack>
    </Stack>
  );
};
