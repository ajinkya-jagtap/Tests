import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import getData from "../../services/getData";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setInfo } from "../../redux/actions/user";
import ResponsiveDrawer from "../Drawer";
import { useHistory } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const [studentInfo, setStudentInfo] = useState({});
  const history = useHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    getStudentData();
  }, []);

  useEffect(() => {
    setUser(localStorage.getItem("name"));
  }, [user]);

  async function getStudentData() {
    try {
      const response = await getData();
      console.log("getAbout response", response);
      setStudentInfo(response);
      dispatch(setInfo(response));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <ResponsiveDrawer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "20%",
        }}
      >
        <Box style={{ width: "60%" }} p={2}>
          <Card
            sx={{ display: "flex" }}
            onClick={() => {
              history.push("setting");
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={studentInfo.image}
              alt="Not found"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {console.log("studentInfo", studentInfo)}
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {studentInfo.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {studentInfo.year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {`${studentInfo.detail1}, ${studentInfo.detail2}, ${
                    studentInfo.detail3
                  }, ${moment(studentInfo.exam_date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}, ${studentInfo.ticker}`}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
        <Box
          p={2}
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {user ? (
            <Typography
              px={2}
              style={{ backgroundColor: "#62D54A", color: "#fff" }}
            >
              {user}
            </Typography>
          ) : (
            <Typography
              px={2}
              style={{ backgroundColor: "#DF5459", color: "#fff" }}
            >
              No user Registered
            </Typography>
          )}
        </Box>
      </div>
    </Box>
  );
};

export default Home;
