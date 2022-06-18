import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ResponsiveDrawer from "../Drawer";

const SelectSeat = () => {
  const [rows, setRows] = useState(13);
  const [columns, setColumns] = useState(6);
  const history = useHistory();

  const dimensions = { width: 13, height: 3 };
  const array2D = Array(rows)
    .fill()
    .map((_, indexH) =>
      Array(columns)
        .fill()
        .map((_, indexW) => indexW)
    );
  console.log("Array2D", array2D);

  return (
    <div>
      <ResponsiveDrawer />
      <Box style={{ display: "flex", marginLeft: "20%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(6,30px)`,
            gridTemplateRows: `repeat(13,30px)`,
            padding: "10px",
          }}
        >
          {array2D.map((row, i) =>
            row.map((col, i) => (
              <>
                <Box m={1} style={{ backgroundColor: "gray" }}></Box>
              </>
            ))
          )}
        </div>
      </Box>

      <Box p={2}>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#74FA19" }}
          onClick={() => {
            history.push("/home");
          }}
        >
          Select Seat
        </Button>
      </Box>
    </div>
  );
};

export default SelectSeat;
