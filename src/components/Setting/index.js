import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router";
import ResponsiveDrawer from "../Drawer";

const itemData = {
  img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  title: "Burger",
};
const Setting = () => {
  const history = useHistory();
  const info = useSelector((state) => {
    console.log("info", state.user.info);
    return state.user.info;
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box>
      <ResponsiveDrawer />
      <div
        style={{
          marginLeft: "20%",
        }}
      >
        <Box p={1}>
          <img
            width="100%"
            height="250px"
            src={info.image}
            alt={itemData.title}
            loading="lazy"
          />
        </Box>
        <Box>
          <Typography>{info.detail1}</Typography>
          <Typography>{info.detail2}</Typography>
          <Typography>{info.Eligibility}</Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography>Enter Details</Typography>
            </Grid>
            <Grid item>
              <TextField
                size="small"
                id="filled-basic"
                label="Enter Name"
                variant="filled"
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                value={age}
                type="number"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                size="small"
                id="filled-basic"
                label="Enter Age"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box p={2}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#74FA19" }}
              onClick={() => {
                console.log("name", name, "age", age, "gender", gender);
                localStorage.setItem("name", name);
                localStorage.setItem("age", age);
                localStorage.setItem("gender", gender);
                history.push("/selectseat");
              }}
            >
              Select Seat
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Setting;
