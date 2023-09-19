import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_USER } from "../Api/user-api";
import {
  Card,
  Box,
  CardContent,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import Spinner from "./Spinner";
const SingleUserInfo = ({ loading, setLoading, loadingStatus }) => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const fetchData = async () => {
    setLoading(true);
    const result = await GET_USER(id);
    console.log(result);
    const error = result?.response?.data?.message;
    setLoading(false);
    return result?.status === 200 ? setData(result?.data?.User) : alert(error);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const {
    first,
    last,
    UserImage,
    DOB,
    email,
    country,
    city,
    states,
    Userage,
    Usergender,
  } = data;
  const navigate = useNavigate();
  const backToAdd = () => {
    loadingStatus();
    navigate("/");
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(data).length > 0 ? (
            <Card
              className="box"
              sx={{
                width: "40%",
                height: "fitContent",
                paddingBottom: "3vmax",
                margin: "3vmax auto",
              }}
            >
              <img
                src={UserImage}
                width="100%"
                height="200px"
                alt={`${first} profile image`}
              />

              <Box
                sx={{
                  width: "fit-content",
                  textAlign: "left",
                  margin: "auto",
                  marginTop: "2vmax",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vmax",
                }}
              >
                <Typography sx={{ fontWeight: "400" }}>
                  Name : <span>{first + " " + last}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  {" "}
                  Email : <span>{email}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  {" "}
                  Age : <span>{Userage}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  Gender : <span>{Usergender}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  DOB : <span>{DOB}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  Country : <span>{country}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  State : <span>{states}</span>
                </Typography>
                <Typography sx={{ fontWeight: "400" }}>
                  City : <span>{city}</span>
                </Typography>
              </Box>
              <CardContent>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  fullWidth
                  onClick={backToAdd}
                >
                  ADD Other response
                </Button>
              </CardContent>
            </Card>
          ) : (
            <h1>not data found</h1>
          )}
        </>
      )}
    </>
  );
};

export default SingleUserInfo;
